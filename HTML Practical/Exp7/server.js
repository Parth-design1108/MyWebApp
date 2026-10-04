// server.js
const http = require('http');
 
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
 
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Home Page</h1><p>Welcome to my Node.js server</p>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Page</h1><p>This server demonstrates the HTTP module.</p>');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('<h1>Contact Page</h1><p>Email: student@example.com</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1>');
  }
});
 
const PORT = 3000;
server.listen(PORT, () => console.log('Server running at http://localhost:' + PORT));
