// Exercicio 1 - Qual é a função do código de status 400 e 422? 
// R: Os códigos da família 400 querem dizer algum erro no lado do cliente. 400 é Bad Request e 422 é Unprocessable Entity.

// Exercício 2 - Qual é a função do código de status 401?
// R: Unauthorized. Indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino

// Crie o diretório src e dentro dele um arquivo movies.json com o os filmes da nossa locadora

// Exercício 3 - Crie um servidor Node.js utilizando o framework Express.

const express = require('express');
const { read } = require('fs');

const app = express();

module.exports = app;

// Exercício 4 - Crie uma função de leitura do JSON com o modulo fs.

const fs = require('fs').promises;

const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

async function readFile() {
  try {
    const response = await fs.readFile(moviesPath);
    return JSON.parse(response);
  } catch (error) {
    console.error(error)
  }
}

// Exercício 5 - Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

app.get('/movies/:id', async (request, response) => {
  try {
    const movies = await readFile();
    const findMovieById = movies.find(({ id }) => id === Number(request.params.id));
    response.status(200).json(findMovieById);
  } catch (error) {
    response.status(500)
  }
}) 

// Exercício 6 - Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

app.get('/movies', async (request, response) => {
  try {
    const movies = await readFile()
    response.status(200).json(movies)
  } catch (error) {
    response.status(500)
  }
})

// Exercício 7 - Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

app.use(express.json());

app.post('/movies', async (request, response) => {
  try {
    const prevMovies = await readFile();
    const { movie, price} = request.body;
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    }
    const addMovie = JSON.stringify([...prevMovies, newMovie])
    await fs.writeFile(moviesPath, addMovie);
    response.status(201).json(addMovie);
  } catch (error) {
    response.status(500)
  }
})

// Exercício 8 - Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

app.post('/movies/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const movies = await readFile();
    const findMovie = movies.findIndex((idNumber) => idNumber === Number(id))
  } catch (error) {
    response.status(500)
  }
})

// Exercício 9 - Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.