// eksisozluk/eksisozluk

'use strict';

// node packages
const cheerio = require('cheerio');
const request = require('request-promise');

module.exports = (endpoint, id, callback) => {
  const options = {
    uri: 'http://eksisozluk.com/' + endpoint + '/' + id,
    transform: body => {
      return cheerio.load(body, {
        normalizeWhitespace: true,
        xmlMode: true
      });
    }
  };

  request(options)
    .then($ => {
      callback($);
    })
    .catch(err => {
      callback(err);
    });
};
