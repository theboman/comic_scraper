const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let url = 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/1';
let comicIssueName = 'Deadpool_Assassin_2018_#1';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const comicImage = $('.scan-page').attr('src');

    console.log('This is comicImage: ', comicImage);
    request(comicImage).pipe(
      fs.createWriteStream('./storage/test/' + comicIssueName + '.jpg')
    );
  }
});

console.log('finished!----');
