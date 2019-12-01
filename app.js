let rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
let second = require('./getnumofpages.js');
let comics = require('./variables.js');

let numberofIssues = 0;

//console.log('this is comics: ', comics);
// need to prime the request-promis with a link this will get the page returned we are only intereseted
// cetain parts of the page namely title of the comic, issues and links to those pages
// then feed this request its parameters - cheerio on the page and return

// get page with request
var options = {
  uri: 'https://readcomicsonline.ru/comic/deadpool-assassin-2018',
  transform: function(body) {
    return cheerio.load(body);
  }
};

// just return our scraped stuff using cheerio
rp(options)
  .then(function($) {
    // Process html like you would with jQuery...
    // going to push an array of each 'a' and 'href' found on the page
    // in our case 6 comics
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

      // it will then creat a directory with each title name
      // need to add a check if these directories exist if so, move on.
      //fs.mkdirSync(`./storage/${elTitle}`);
    });
    //console.log(comics);
    numberofIssues = comics.comic.length;
    // this gets passed to the next loop
  })
  .then(() => {
    for (i = 0; i < numberofIssues; i++) {
      let comLink = comics.comic[i].href;
      // needed to switch to a promise to avoid a simpler method of aschronis operations in that
      // the above operation was returning before this operation finished, meaning
      // we were not getting all of the data scraped
      // console.log('this is is every link:', comLink);
      // pass the href and comics variable to the next module
      second.getPages(comLink, comics, i);
    }
  })
  .catch(function(err) {
    // Crawling failed or Cheerio choked...
    console.log('this is an error from catch: ', err);
  });

// gets
