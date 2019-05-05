const request = require('request');
const cheerio = require('cheerio');
const myArray = [];
let Url = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/6'; // for testing only

getPages = Url => {
  console.log('this is from the function in getnumofpages : ', comics);
  request(Url, (error, response, html) => {
    console.log(
      'this is from the function in getnumofpages in the request: ',
      comics
    );
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
      console.log('this is from the function in getnumberofpages : ', comics);
    }
  });
};

module.exports = { getPages };
