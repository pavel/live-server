var request = require('supertest');
var path = require('path');
var port = 40200;
var server = require('..').start({
	root: path.join(__dirname, "data"),
	port: port,
	open: false,
	rewrite: [
		"/test.html$ /index.html [L]"
	]
});

describe('rewrite tests', function() {
	it('should serve rewritten urls', function(done) {
		request(server)
			.get('/test.html')
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.expect(/Hello world/i)
			.expect(200, done);
	});
});


