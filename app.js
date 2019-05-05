var rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const second = require('./getnumofpages.js');

let comics = {
  comic: [
    // {
    //   name: '',
    //   href: '',
    //   pages: []
    // }
    // {
    //   name: '',
    //   href: '',
    //   pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // }
  ]
};
let numberofIssues = 0;

var options = {
  uri: 'https://readcomicsonline.ru/comic/deadpool-assassin-2018',
  transform: function(body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(function($) {
    // Process html like you would with jQuery...
    $('.volume-0').each((i, el) => {
      const elTitle = $(el)
        .find('a')
        .text()
        .replace(/[:()]/gm, '')
        .replace(/[\s]/gm, '_');

      const elLink = $(el)
        .find('a')
        .attr('href');
      comics.comic.push({});
      comics.comic[i].name = elTitle;
      comics.comic[i].href = elLink;
      comics.comic[i].pages = [];

      // need to add a check if these directories exist if so, move on.
      //fs.mkdirSync(`./storage/${elTitle}`);
    });
    numberofIssues = comics.comic.length;
  })
  .then(() => {
    //console.log('this is 2nd then, number of issues: ', numberofIssues);
    //console.log('this is comics from 2nd then :', comics);
    for (i = 0; i < numberofIssues; i++) {
      let comLink = comics.comic[i].href;

      //console.log('this is is every link:', comLink);
      second.getPages(comLink, comics, i);

      //console.log('this is myarray:', myArray);
    }
  })
  .catch(function(err) {
    // Crawling failed or Cheerio choked...
    console.log('this is an error from catch: ', err);
  });
