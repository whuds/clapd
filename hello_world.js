const http = require('http');
//require manages dependencies of program (can be any library)

const server = http.createServer((req, res) => {
	res.end('Hello World\n');
});

server.listen(4242, () => {
	console.log('Server is running...');
});

