# Scraper for Comics

-- we are assuming you have created a folder called /storage within the local folder for all images to be collected.

## index.js loads all 3 modules

## 1st module: app.js
scrape initial search page on comic series and adds each comic issue to object of arrays comics

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

- [x] iterate thru this list taking the title of the comic and creating a directory for each comic issue.

## 2nd module: getnumofpages.js
- [x] goto each issue and get list of all pages that make up each issue add this to the array of objects created


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
6. store data into flat text file or mongodb?






