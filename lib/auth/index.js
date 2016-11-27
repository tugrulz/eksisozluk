// eksisozluk/eksisozluk

'use strict';

// local packages
const login = require('./login');
const logout = require('./logout');

const auth = {
  login,
  logout
};

// export
module.exports = auth;
