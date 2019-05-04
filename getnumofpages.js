const request = require('request');
const cheerio = require('cheerio');
const myArray = [];
let comicURL = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/6';
//let comicURL = 'https://readcomicsonline.ru/comic/2000-ad/2127/1';

// this gets the total number of pages and stores into variable

getPages = Url => {
  //console.log('this is Url: ', Url);
  request(Url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $('.selectpicker')
        .first()
        .find('option')
        .each((i, el) => {
          const issueNumPages = $(el)
            .attr('value')
            .replace(/\s\s+/gm, '');
          myArray.push(issueNumPages);
        });
      console.log('hey this is the array from num of pages ', myArray);
    }
  });
};

getPages(comicURL);

module.exports = getPages;
