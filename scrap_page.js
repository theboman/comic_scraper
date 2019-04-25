const request = require('request');
const cheerio = require('cheerio');
const myArray = [];
//let url = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/6';
let url = 'https://readcomicsonline.ru/comic/2000-ad/2127/1';

// this is the first page of the issue of the comic
// this gets the total number of pages and stores into variable

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.selectpicker')
      .first()
      .find('option')
      .each((i, el) => {
        const issueNumPages = $(el)
          //.find('option')
          .attr('value')
          //.text()
          .replace(/\s\s+/gm, '');
        console.log(i);
        myArray.push(issueNumPages);
        console.log(issueNumPages);
      });
    $('.img-responsive scan-page').attr('src');
    console.log('hey this is the array ', myArray);
  }
});

console.log('finished!----');
