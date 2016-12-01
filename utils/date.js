// eksisozluk/eksisozluk

// node packages
const moment = require('moment');

// vars
const regexes = [
  /((\d{2}\.){2}\d{4})/,
  /((\d{2}\.){2}\d{4}\s\d{2}:\d{2})/,
  /((\d{2}\.){2}\d{4}\s\d{2}:\d{2}\s~\s\d{2}:\d{2})/,
  /(((\d{2}\.){2}\d{4}\s\d{2}:\d{2})\s~\s((\d{2}\.){2}\d{4}\s\d{2}:\d{2}))/
];

module.exports = date => {
  moment.locale('tr'); // localize moment

  const dateFormat = 'DD.MM.YYYY HH:mm:ss';
  const hours = ' 00:00:00';
  const seconds = ':00';
  const modified = date.indexOf(' ~ ') > 0;

  let level = 0;
  regexes.forEach(regex => {
    if (regex.test(date)) {
      level = regexes.indexOf(regex);
    }
  });

  const d = {};
  if (level === 0) {
    d.created = moment(date + hours, dateFormat).format().toString();
    d.modified = null;
  }
  else if (level === 1) {
    d.created = moment(date + seconds, dateFormat).format().toString();
    d.modified = null;
  }
  else if (level === 2 && modified) {
    d.created = moment(date.split(' ~ ')[0] + seconds, dateFormat).format().toString();
    d.modified = moment(date.split(' ~ ')[0] + ' ' + date.split(' ~ ')[1] + seconds, dateFormat).format().toString();
  }
  else if (level === 3 && modified) {
    d.created = moment(date.split(' ~ ')[0] + seconds, dateFormat).format().toString();
    d.modified = moment(date.split(' ~ ')[1] + seconds, dateFormat).format().toString();
  }

  return d;
};
