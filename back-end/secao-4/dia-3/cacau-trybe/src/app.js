const express = require('express');

const app = express();

const cacauTrybe = require('./cacauTrybe');

app.get('/chocolates', async function(request, response) {
  const chocolates = cacauTrybe.getAllChocolates();

  response.status(200).json({chocolates});
})