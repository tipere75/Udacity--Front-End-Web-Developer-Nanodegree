# Evaluate a news article with Natural Language Processing

4th project of the Front End Developer Nanodegree Program by Udacity.\

This project goal is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. By providing the article URL, the user gets a sentiment analysis from [MeaningCloud API](https://www.meaningcloud.com/products/sentiment-analysis) based on the content of the article.


## Requirements to use the tool
- Node
- Webpack
- a developer account with MeaningCloud

## Installing the tool
0. Check that Node and npm are installed from the terminal
```
node -v
npm -v
```
1. Clone the repo in your local folder and open a terminal pointing at this folder
2. Install loaders and plugin
```
## for server parsing response
npm install body-parser cors

## for javascript compatibility
npm install -D @babel/core @babel/preset-env babel-loader

## for dynamic reference to the dist folder
npm install -D html-webpack-plugin

## for cleaning dist folder at each rebuild
npm install -D clean-webpack-plugin

## for loading styles
npm install -D style-loader node-sass css-loader sass-loader

## for efficiency by minifying codes
# for webpack4
npm install -D mini-css-extract-plugin terser-webpack-plugin@5 optimize-css-assets-webpack-plugin
# for webpack 5
npm install -D mini-css-extract-plugin terser-webpack-plugin@5 css-minimizer-webpack-plugin

## for service worker
npm install -D workbox-webpack-plugin

## for environment variables such as API key
npm install dotenv

## for using fetch
npm install node-fetch
```
3. Get your API key from MeaningCloud and configure the .env file in the root folder with:
```
API_KEY = '.....'
```


## 2. Using the tool
First build the project with the terminal
```
npm run build-prod
```
Run it with the terminal
```
npm run start
```
Open your browser at http://localhost:8080/
