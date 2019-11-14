const http = require('http') //use antiquated syntax to make sure compatible w/ all versions of node

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World, from NodeJS');
});

server.listen(port, hostname, () => {
	console.log(`server listenign on http://${hostname}:${port}`)
});
