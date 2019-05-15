const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let comics = {
  comic: [
    {
      name: 'Deadpool_Assasin_2018_#1',
      href: 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/1',
      pages: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33
      ]
    },
    {
      name: 'Deadpool_Assasin_2018_#2',
      href: 'https://readcomicsonline.ru/comic/deadpool-assassin-2018/2',
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};

function storeImages(comics) {
  numberofComics = comics.comic.length;
  console.log('this is length: ', numberofComics);

  comics.comic.forEach((element, index) => {
    console.log('this is an element ', element.name);
    console.log('this is index: ', index);
    //get the pages from comics
    comics.comic[index].pages.forEach((element, pIndex) => {
      console.log('this is pages: ', element);
      //console.log('this is still comics href:', comics.comic[index].href);
      // get the entire href for each page
      pagehref = '';
      pIndex == 0
        ? (pagehref = comics.comic[index].href)
        : (pagehref = `${comics.comic[index].href}/${element}`);
      //console.log(`${comics.comic[index].href}/${element}`);
      console.log(pagehref);
    });
  });

  // request(url, (error, response, html) => {
  //   if (!error && response.statusCode == 200) {
  //     const $ = cheerio.load(html);

  //     const comicImage = $('.scan-page').attr('src');

  //     console.log('This is comicImage: ', comicImage);
  //     request(comicImage).pipe(
  //       fs.createWriteStream('./storage/test/' + comicIssueName + '.jpg')
  //     );
  //   }
  // });
}
storeImages(comics);
console.log('finished!----');
