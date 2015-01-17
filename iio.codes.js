var config = require('./iio.config');
var iio = require('./../iio-codes')(config);

iio.start([
  'jade:html:watch',
  'browser:sync',
  'less:watch'
  ]);
