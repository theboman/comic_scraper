const request = require('request');
const cheerio = require('cheerio');

let Url = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/6'; // for testing only

getPages = Url => {
  const myArray = [];
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
      console.log(
        'this is the url:',
        Url,
        ' - this is myArray from getPages:',
        myArray
      );
      //return myArray;
    }
  });
  //console.log('this is from the function in getnumberofpages : ', comics);

  //return myArray;
};

module.exports = { getPages };
