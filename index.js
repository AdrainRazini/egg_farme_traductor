// index.js (Node.js)
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/traduzir', async (req, res) => {
  const { texto, destino } = req.body;

  try {
    const response = await axios.post('https://libretranslate.com/translate', {
      q: texto,
      source: 'auto',
      target: destino,
      format: 'text'
    });

    res.json({ traducao: response.data.translatedText });
  } catch (error) {
    res.status(500).json({ erro: 'Erro na tradução' });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
