const express = require('express');

const router = express.Router();
const nameValidation = require('../middlewares/nameValidation')

router.get('/activities',  (req, res) => {
  res.status(200).send('sucesso')
});

router.post('/activities', nameValidation, (req, res) => {
  const { name } = req.body;

  nameValidation;

  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = router;