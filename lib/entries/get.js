// eksisozluk/eksisozluk

'use strict';

// local packages
const d = require('../../utils/date');
const r = require('../../utils/request');
const urls = require('../../utils/urls');

const get = (entryID, callback) => {
  r('entry', entryID, $ => {
    let entry = {};

    if ($.statusCode === 404) {
      entry = {
        status: 404,
        data: {
          error: 'Not Found',
          message: 'entry does not exist.'
        }
      };
    }
    else {
      const date = d($('ul#entry-list li footer div.info a.permalink').text());

      entry = {
        status: 200,
        data: {
          author: $('ul#entry-list li').data('author'),
          author_id: $('ul#entry-list li').data('author-id'),
          author_url: urls.user + $('ul#entry-list li').data('author'),
          content: $('ul#entry-list li div.content').html(),
          content_encoded: $('ul#entry-list li div.content').text().trim(),
          date_created: date.created,
          date_modified: date.modified,
          eksiseyler_link: urls.seyler + $('ul#entry-list li').data('seyler-slug'),
          eksiseyler_slug: $('ul#entry-list li').data('seyler-slug'),
          entry_id: entryID,
          favorite_count: $('ul#entry-list li').data('favorite-count'),
          permalink: urls.entry + entryID,
          title: $('h1#title').data('title'),
          title_id: $('h1#title').data('id'),
          title_slug: $('h1#title').data('slug'),
          title_url: urls.base + $('h1#title a').attr('href')
        }
      };
    }

    callback(entry);
  });
};

// export
module.exports = get;
