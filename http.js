const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url === '/') {
    res.end('Welcome to home page');
  }
  if (req.url === '/about') {
    res.end('Welcome to about page');
  }
  if (req.url === '/err') {
    res.end(`
     <h1>We not find the page you are looking for :(</h1>
     <p> Find another page </p> 
     <a href = "/" > Back to home </a>
    `);
  }
});

server.listen(5000);









