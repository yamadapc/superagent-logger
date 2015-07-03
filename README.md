superagent-logger
=================
[![npm downloads](http://img.shields.io/npm/dm/superagent-logger.svg)](https://www.npmjs.org/package/superagent-logger)
[![npm version](http://img.shields.io/npm/v/superagent-logger.svg)](https://www.npmjs.org/package/superagent-logger)
- - -
superagent middleware for adding NPM-style logging. Useful for debugging
HTTP-clients.

## Installing
This package is published to NPM as `superagent-logger`.
```
npm install superagent-logger
```

## Usage
```javascript
var request = require('superagent');
var logger = require('superagent-logger');

request.get('https://github.com/').use(logger).query({ q: 'search' }).end();
request.post('https://github.com/').use(logger).end();
```
This will produce the following output:

![screeshot1](/screenshot1.png)

If you also want to log requests when they're fired, use the `outgoing` option:
```javascript
// Will log when the request is triggered:
request.get('https://github.com/').use(logger({ outgoing: true })).end();
```

![screeshot2](/screenshot1.png)

## License
This code is licensed under the MIT license for Pedro Tacla Yamada.
