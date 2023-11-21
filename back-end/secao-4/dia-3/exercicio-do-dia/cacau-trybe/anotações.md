Observações gerais sobre o conteúdo de hoje para assimilar:

O método readFile do módulo Fs é assincrono, logo sempre utilizar async e await e MUITO IMPORTANTE: o readfile retorna o resultado em forma de string, logo sempre lembrar de utilizar return JSON.parse(batata) para que fique no devido formato de objeto.

Isso ainda deve ser testado, porém acredito que toda situação em que utilizarmos o fs.writeFile devemos antes stringficar o que será utilizado para escrever no arquivo.

O módulo path possui o método join, que pode ser desestruturado assim: const { join } = require('path').
Podemos dizer que na verdade o join serve para combinar ou customizar caminhos de arquivo.

Então quando utilizamos o join(__dirname, path) estamos dizendo que queremos combinar o nome do diretório + o caminho (lembrar de colocar 'utf-8' como encoding, de acordo com o professor evita erros)

Stringfy: quando escrever o json em um arquivo com o fs.writeFile. 
Parse: quando você lê o arquivo com o fs.readFile.  

Sempre que você tiver um JSON, e ele vem como uma string você precisa parsear ele pra usar as chaves e usar os valores.

-----
contrato de API: é o comando que traz o comportamento geral da API

mocha: é basicamente o corpo de testes, vamos usar para fazer os describes e it's.

chai: é uma biblioteca de asserções que compõem os testes.
  Dicas: 
  -desestruturar o expect do chai;
  
  -o chai.request permite chamar diretamente os endpoints, ele recebe como parametro o app, logo depois utilize dot notation -> chai.request(app).get('/suarota');
  
  -ao fazer asserções lembrar que para comparar objetos deve-se utilizar deep.equal, pois comparação direta de objetos sempre retorna false, logo o teste não passará;


chai-http: biblioteca para que o teste possa ligar a uma porta de servidor automáticamente
  Dicas:
  -para "ligar" o servidor do chai-http basta utilizar o chai.use(chaiHttp) - armazene o chaiHttp em uma variável para chamar nesse parametro;

sinon: utilizar para criar as "simulações" utilizando dublês, utilizar o sinon.restore() depois dos testes
  Dicas:
  -os stubs aqui vão basicamente servir para fazer mockar módulos/comportamentos. No caso do exercício de hoje stubamos o fs para dizer sinon.stub(fs, 'readFile').resolves(algumMock), no caso "algumMock" seria o arquivo mock com o comportamento que desejamos. IMPORTANTE: caso não haja algum retorno o .resolves() pode ficar sem parametro. Ex: writeFile não retorna nada, então ao utilizar o stub seria sinon.stub(fs, 'writeFile').resolves();

