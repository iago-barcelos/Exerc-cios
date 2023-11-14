const fs = require('fs');

const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const sinon = require('sinon');

const app = require('../../src/app');


const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  sinon.stub(fs.promises, 'readFile')
    .resolves(mockFile);
})

describe('Usando o método GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates!', async function () {
    const response = await chai.request(app).get('/chocolates');

    expect(response.status).to.be.equals(200);
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    expect(response.body.chocolates).to.deep.equal(output);
  })
})

describe('Usando o método Get em /chocolates/total', function () {
  it('Mostra a quantidade de chocolates', async function () {
    const response = await chai.request(app).get('/chocolates/total')
    
    const output = {
      "totalChocolates": 4
    }

    expect(response.body).to.be.deep.equal(output);
  })
})