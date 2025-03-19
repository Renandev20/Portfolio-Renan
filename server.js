const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Para carregar variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;


  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_USER, 
    subject: `Nova mensagem de contato: ${subject}`, 
    text: `Você recebeu uma nova mensagem de ${name} (${email}):\n\n${message}`, 
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return res.status(500).json({ success: false, message: 'Erro ao enviar e-mail.' });
    }
    console.log('E-mail enviado:', info.response);
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  });
});


app.get('/', (req, res) => {
  res.send('Servidor de e-mail está funcionando!');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});