// eksisozluk/eksisozluk

'use strict';

// local packages
const r = require('../../utils/request');
const urls = require('../../utils/urls');

const get = (entryID, callback) => {
  r('entry', entryID, $ => {
    let entry = {};


    callback(entry);
  });
};

// export
module.exports = get;
