const app = require('./app');

const port = 3001

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
})