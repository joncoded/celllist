# cellList

* a React library for flexibly displaying lists of data in tables with sortability functions
* sorts alphabetically/numerically regardless of alphabet system (including Chinese!)
* this project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

## prerequisites

to use this library, you should: 

* be comfy with using the Terminal or command line
* have a data set in JSON format for a table ready
* know enough JavaScript to work with the (or use your own) SampleData.js file 

you do not: 

* actually need to know React to enjoy using this 
  * simply edit the `src/data/SampleData.js` file to have your own table

## startup

### download

from the command line, run this command:

```
$ git clone https://github.com/joncoded/celllist.git
```

(a new folder will be created)

### install

```
$ npm install
```
### start

```
$ npm start
```
### and then...

* open [http://localhost:3000](http://localhost:3000) to view it in the browser
* page will reload on save

## development

* configure formatting of the list/table in `src/data/sampleData.js`
* optionally, configure the styling in `src/index.css`
* modify the `homepage` property in `package.json` for deployment to gh-pages

## build

```
$ npm run build
``` 

* builds the app for production to the `build` folder
* bundles react in production mode
* build is minified and the filenames include hashes
* app becomes ready for [deployment](https://facebook.github.io/create-react-app/docs/deployment) 

more in the [create-react-app documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## deploy

```
$ npm run deploy
```

* get it published on `yourname.github.io/celllist` (or `yourname.github.io/reponame`)