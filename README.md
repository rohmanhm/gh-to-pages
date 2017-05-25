# 💫 GH-TO-PAGES

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/gh-to-pages.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/rohmanhm/gh-to-pages.svg?branch=master)](https://travis-ci.org/rohmanhm/gh-to-pages)

> Convert Github Repo URL to Github Pages

## Example
Convert from
```javascript
'https://github.com/rohmanhm/gh-to-pages' // support with https protocol
'http://github.com/rohmanhm/gh-to-pages' // support with http protocol
'github.com/rohmanhm/gh-to-pages' // support without protocol
'git@github.com:rohmanhm/gh-to-pages.git' // support ssh url
```
to
```javascript
'https://rohmanhm.github.io/gh-to-pages'
```
## Install
  * NPM
    ```bash
    npm install gh-to-pages --save
    ```
  * Yarn
    ```bash
    yarn add gh-to-pages
    ```
## How to use
```javascript
// es6
import ghToPages from 'gh-to-pages'
// commonjs
const ghToPages = require('gh-to-pages')

ghToPages('https://github.com/rohmanhm/gh-to-pages') // result https://rohmanhm.github.io/gh-to-pages
```

## LICENSE
MIT @rohmanhm