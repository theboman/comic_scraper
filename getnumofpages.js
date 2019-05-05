const rp = require('request-promise');
const cheerio = require('cheerio');
const myArray = [];
//let Url = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/6'; // for testing only

getPages = (Url, comics, i) => {
  const myArray = [];
  rp(Url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $('.selectpicker')
        .first()
        .find('option')
        .each((i, el) => {
          const issueNumPages = $(el)
            .attr('value')
            .replace(/\s\s+/gm, '');
          //comics.comic[i].pages.push(issueNumPages);
          // should work but got kicked off network!
          myArray.push(issueNumPages);
        });
      // //console.log(
      //   'this is the url:',
      //   Url,
      //   'this is index: ',
      //   i,
      //   ' - this is myArray from getPages:',
      //   myArray
      // );
      return myArray;
    }
  })
    .then(function() {
      console.log('-----------start of ---------index: ', i);
      //console.log('this is finished: ', myArray);
      //comics.comic[i].pages.push(myArray);
      console.log('this is comics: ', comics.comic[i]);

      console.log('-----------end of ---------index: ', i);
    })
    .then(function() {
      console.log('finished');
      console.log('this is the finished comics: ', comics);
    })
    .catch(function(err) {
      return console.log(err);
    });
  //console.log('this is from outside the request : ', myArray);

  //return my2ndArray;
};

module.exports = { getPages };
