<h1 align="center">
	<br>
	<img width="800" src="https://eksisozluk.com/content/img/new-design/eksisozluk_logo.svg" alt="ekşi sözlük">
	<br>
  <br>
  <br>
</h1>

> kutsal bilgi kaynağı

[![build status](https://img.shields.io/travis/eksisozluk/eksisozluk.svg?style=flat-square)](https://travis-ci.org/eksisozluk/eksisozluk)
[![appveyor](https://img.shields.io/appveyor/ci/gokaygurcan/eksisozluk.svg?style=flat-square)](https://ci.appveyor.com/project/gokaygurcan/eksisozluk)
[![code climate](https://img.shields.io/codeclimate/github/eksisozluk/eksisozluk.svg?style=flat-square)](https://codeclimate.com/github/eksisozluk/eksisozluk)
[![david](https://img.shields.io/david/eksisozluk/eksisozluk.svg?style=flat-square)](https://david-dm.org/eksisozluk/eksisozluk)
[![david dev](https://img.shields.io/david/dev/eksisozluk/eksisozluk.svg?style=flat-square)](https://david-dm.org/eksisozluk/eksisozluk)
[![license](https://img.shields.io/github/license/eksisozluk/eksisozluk.svg?style=flat-square)](https://github.com/eksisozluk/eksisozluk)

---


## Usage

First, install the package from npm registry: 
```bash
npm install --save eksisozluk
```

And then, use it in your project:
```javascript
const eksisozluk = require('eksisozluk');

eksisozluk.entries.get(1, result => {
  console.log(result);

  /*{
    status: 200,
    data: {
      author: 'ssg',
      author_id: 8097,
      author_url: 'https://eksisozluk.com/biri/ssg',
      content: ' gitar calmak icin kullanilan minik plastik garip nesne. ',
      content_encoded: 'gitar calmak icin kullanilan minik plastik garip nesne.',
      date_created: '15.02.1999',
      date_modified: null,
      eksiseyler_link: 'https://seyler.eksisozluk.com/pena',
      eksiseyler_slug: 'pena',
      entry_id: 1,
      favorite_count: 3603,
      permalink: 'https://eksisozluk.com/entry/1',
      title: 'pena',
      title_id: 31782,
      title_slug: 'pena',
      title_url: 'https://eksisozluk.com//pena--31782'
    }
  }*/
});

eksisozluk.entries.get(2, result => {
  console.log(result);

  /*{
    status: 404,
    data: {
      error: 'Not Found',
      message: 'entry does not exist.'
    }
  }*/
});
```


## License

GNU General Public Licence v3.0


## Disclaimer

`ekşisözlük` name, its variations and the logo are registered trademarks of [ekşi teknoloji ve bilişim a.ş.](http://eksiteknoloji.com/)
