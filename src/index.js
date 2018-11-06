const http = require('http')
const redis = require('./redis')

const server = http.createServer(function (req, res) {

	// res.writeHead(200, {'Content-Type': 'text/plain'});

	// res.end('Hello World\n');

	redis.get('foo', function (err, result) {
  		console.log(result);
  		res.writeHead(200, {'Content-Type': 'text/plain'});
 		res.end(`Hello Worldssssssss\n${result}`);
	});

}).listen(80)

console.log('Server running in docker at http://127.0.0.1:80/');
