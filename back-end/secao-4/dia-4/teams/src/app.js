const express = require('express');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

// 🚀 Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.

function existingId(req, res, next) {
  const { id } = Number(req.params);
  const teamId = teams.some((team) => team.id === id); 
  // o método some procura no array baseado no que foi passado, se entre os itens existir algo que atenda, ele apenas retorna true ("Tem algum item assim la dentro? Tem = true, nãoTem = false")
  if (teamId) {
    next();
  } else {
    res.sendStatus(400)
  }
}

app.get('/teams/:id', existingId, (req, res) => {
  try {
    const { id } = Number(req.params);
    const teamId = teams.find((team) => team.id === id);
    res.status(201).json(teamId);
  } catch (error) {
    res.status(400)
  }
});


module.exports = app;