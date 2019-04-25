# Scraper for Comics

-- we are assuming you have a folder created called /storage within the local folder for all images to be collected

## first module title index.js
scrape initial search page on comic series

- [x] Return list of all comic issues on title
- [x] puts this list into an array of objects called comics with the following format
- [x] iterate thru this list taking the title of the comice and creating a directory for each

## second module scrape_page.js
- [x] goto each issue and get list of all pages that make up each issue add this to the array of objects created
- [x] get first image on this first page


## 3rd module store_image.js
- [ ] iterate thru all pages for issue getting each pages image and save this to comic issue's directory

## put all together into one cohesive program
- [ ] solve order of execution problem, currently the 2nd part is finishing before the first part, going to try putting first part into a call back then execute the 2nd part, then the 3rd.


## additional things to build
1. make simple interface for pasting linke
2. detect whether this has been done before?
3. detect if directories have been made if so move to next step
4. detect if images have been saved, if not save missing, skip exisiting





