const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// variables

let url = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018';

// to store comics found at given url
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

//this is the search on a particular comic
//this gets the number of issues available
request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.volume-0').each((i, el) => {
      const elTitle = $(el)
        .find('a')
        .text()
        .replace(/[:()]/gm, '')
        .replace(/[\s]/gm, '_');

      const elLink = $(el)
        .find('a')
        .attr('href');

      // alright got all the scrapes, now push this into an array of objects

      comics.comic.push({});
      comics.comic[i].name = elTitle;
      comics.comic[i].href = elLink;
      comics.comic[i].pages = [];

      console.log(elTitle);
      console.log(elLink);
      console.log(i);
      console.log('this is the stored ', comics.comic[i]);
      // this is done now make directories for each comic issue

      // asyc way of creating directories... maybe not the best approach since could move on to next step
      // fs.mkdir(`./storage/${elTitle}`, function(err, data) {
      //   console.log('directory created: ', elTitle);
      // });

      fs.mkdirSync(`./storage/${elTitle}`);
      console.log('--------- Directory made!---------: ');
      var numberOfComics = comics.comic.length;
      console.log('this is the number of comics: ', numberOfComics);
    });
  }
});

var numberOfComicsAfter = comics.comic.length;
console.log('this is the number of comics after: ', numberOfComicsAfter);

// --------------------------------------------------------------------
// get the first comic page and get number of pages plus first image
// --------------------------------------------------------------------

// request(elLink, (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);

//       $('.selectpicker')
//             .first()
//             .find('option')
//             .each((i_num, el) => {
//               const issueNumPages = $(el)
//                 //.find('option')
//                 .attr('value')
//                 //.text()
//                 .replace(/\s\s+/gm, '');
//               console.log(i_num);
//               comics.comic[i_num].pages.push(issueNumPages);
//               //console.log(issueNumPages);
//             });
//           // $('.img-responsive scan-page')
//           // .attr('src')
//           // console.log('hey this is the array ', myArray);
//         }
//     });
