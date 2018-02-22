const http = require('http');
const pug = require('pug');

const homepage = pug.compileFile('templates/homepage.pug');
const requestHandler = (request, response) => {
  response.end(homepage({ name: 'World' }));
};

const server = http.createServer(requestHandler);

server.listen(3000, (err) => {
  if (err) {
    console.log('An error has occured', err);
  }

  console.log('Server is listening on port 3000');
});

