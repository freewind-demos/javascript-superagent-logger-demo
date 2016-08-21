const request = require('superagent');
const logger = require('superagent-logger');

request.get('http://taobao.com')
  .use(logger)
  .end((err, res) => {
    if(err) return console.error(err);
    console.log('got response');
  });