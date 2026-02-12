// server.mjs

// server model

// answeer reqeyst

import { createServer } from 'node:http';

function answerRequest(statusCode,Message,response) {

  let template = 



}

const server = createServer((req, res) => {



  console.log(`Recived request for ${req.url}`);

  if(req.url=='/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the Home Page!\n');

  } else if(req.url == '/about ') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the About Page!\n');

  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('404 not found\n');

  } 

      if (req.url === '/favicon.ico') {
res.writeHead(204); // No Content
res.end();
return;
}


});

// starts a simple http server locally on port 3000 and ctrl + c in ternimal to kill server connection
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node index.js`
