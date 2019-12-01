# Scraper for Comics

goal is to goto this website 
https://readcomicsonline.ru/comic
and automatically retrive all comics for a given title. Note doing a search on this website will return many titles for a given search, for example 'deadpool' will give lots of titles. We are only taking a single title 'Assasins' Shown here
https://readcomicsonline.ru/comic/deadpool-assassin-2018 this show 6 titles.

our goal is to take a title: deadpool assasins
 - Retrive all 6 issues. Download all images and create a directory for each issue under Deadpool/Assassins on the users computer.


this demonstrates 
- FS usage
- using modules
- scraping
- using a variable across modules
- sychronization of operations. Need to wait for stuff to finish to progress to next step

-- we are assuming you have created a folder called /storage within the local folder for all images to be collected.

## app.js will start running the 3 modules for this application 
- app.js, the app creates initial array of objects of comics and includes the next 2 modules
- then runs getnumberofpages, 
- then runs  getandstoreimages
---
## 1st module: app.js

scrape initial search page on comic series and adds each comic issue to object of arrays comics. Using cheerio this will 

for the example: 
https://readcomicsonline.ru/comic/deadpool-assassin-2018

- [x] get list of all comic issues on title
- [x] puts this list into an object of arrays called comics with the following json/mogodb format:

```javascript
    comics: {
        comic: [
            {
                comic: '',
                href: '',
                pages: []
            }
        ]
    }
```

will populate this object like this:



- [x] iterate thru this list taking the title of the comic and creating a directory for each comic issue.
---
## 2nd module: getnumofpages.js
- [x] goto each issue and get the list of all pages that make up each issue. Then add this as an array to the pages key. This needs to be a new request since this is a new page given by the first request. This is stored in a variable that gets passed to the next module.

```javascript
    comics: {
        comic: [
            {
                comic: '',
                href: '',
                pages: []
            }
        ]
    }
```




---
## 3rd module: getandstoreimage.js
- [ ] iterate thru all pages for issue getting each pages image and save this to comic issue's directory

## put all together into one cohesive program
- [ ] solve order of execution problem, currently the 2nd part is finishing before the first part, going to try putting first part into a call back then execute the 2nd part, then the 3rd.


## additional things to build
1. make simple interface for pasting link
2. detect whether this has been done before?
3. detect if directories have been made if so move to next step
4. detect if images have been saved, if not save missing, skip 
exisiting
5. make interface to show progress bars for all steps
6. store data into flat text file or mongodb or postgres?
7. set a master download directory on the users computer






