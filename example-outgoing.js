var request = require('superagent');
var logger = require('./');

// Will log when the request is triggered:
request.get('https://github.com/').use(logger({ outgoing: true })).end();
