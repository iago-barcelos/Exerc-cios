Anotações do conteúdo de middlewares:

- Uma observação que tenho feito é que para validações é melhor se utilizar de métodos que retornam true ou false (checar a documentação).
  - Outra forma de fazer é utilizar métodos que retornam outras coisas e utilizar um if(retornoDoMétodo). Dessa forma o próprio if checa se é true ou false.

- Os middlewares são basicamente funções que otimizam a lógica e fluxo da aplicação, evitando repetições de código. Seja pra validar dados ou qualquer outra coisa que a aplicação em geral necessita. Pode traçar um paralelo com os hooks no react.

- O express já entende os middlewares, então lembrar de usar o parametro next ao criá-los: function algumMiddleware(req, res, next) {}.
  - Next vai dizer a aplicação para passar por aquele middleware, mas não resolve a requisição, apenas "passa pro próximo".
  - Na construção da função middleware lembrar de: 1 - se a validação não passar, já para a requisição por ali (status da família 400); 2 - O melhor jeito por enquanto é fazer assim: if (deu certo) { next(); } else { res.sendStatus(400) }

- Para usar o middleware devidamente na rota, ele deve ser passado no parametro nessa ordem: app.get('/suaRota', seuMiddleware, (req, res) => {}). Ele não vai funcionar se for chamado no corpo da função da rota.