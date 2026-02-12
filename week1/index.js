// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {

  console.log(req);
  console.log(req.method)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('I live in centi\n');
});

// starts a simple http server locally on port 3000 and ctrl + c in ternimal to kill server connection
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node index.js`
