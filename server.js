const http = require('http');
const fs = require('fs');

let requestCounter = 0;

const favicon = fs.readFileSync('favicon.ico');

const server = http.createServer((request, response) => {
  if (request.url === '/favicon.ico') {
    response.end(favicon);
  }

  requestCounter++;

  switch (request.url) {
    case '/students':
      response.write('Students');
      break;

    case '/':
    case '/courses':
      response.write('Front + Back');
      break;
    default:
      response.write('404 Not found');
  }

  response.write(' IT-CAMASUTRA ' + requestCounter);
  response.end();
});
server.listen(8080);
