const express = require('express');

const app = express();

const cacauTrybe = require('./cacauTrybe');

// Lê os arquivos do json que serve como database
app.get('/chocolates', async function(request, response) {
  const chocolates = await cacauTrybe.getAllChocolates();

  response.status(200).json({chocolates});
})

// Lê os arquivos do json e retorna a quantidade de chocolates
app.get('/chocolates/total', async function(request, response) {
  try {
    const chocolates = await cacauTrybe.getAllChocolates();
    const length = {
      "totalChocolates": chocolates.length
    };
    response.status(200).json(length);
  } catch (error) {
  response.status(500).send(console.error(error))
  }
})


module.exports = app;