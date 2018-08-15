# Blog-app
This is a blog built with usage of React, Redux & Firebase.
* Login with Github
* Create and Edit Post
* View Posts List
* View Post

## Demo online
[https://blog-hl.herokuapp.com/](https://blog-hl.herokuapp.com/)

## Features
* **React/Redux best practices**
  - modules
  - presentational/container components
  - class based/stateless functional components
  - one-way direction data flow
  - conditional rendering
* **ES6**
  - object/array destructuring
  - spread operator
* **Async/await**
* **Client side routing, public/private routes with React Router**
* **Production Web Server with Express**
* **Firebase**
  - user accounts (github authentication)
  - work with Firebase Realtime Database
  - private Firebase Data
  - data validation
* **Styling**
  - SCSS
  - flexbox
* **JavaScript Standard Style**
* **3rd-party npm modules**

## About
Using technologies:
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux](https://github.com/reduxjs/redux)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Babel](http://babeljs.io)
* [Webpack](https://github.com/webpack/webpack)
* [Firebase](https://www.npmjs.com/package/firebase)
* [css-loader](https://github.com/webpack-contrib/css-loader), [style-loader](https://github.com/webpack/style-loader) and [sass-loader](https://github.com/jtangelder/sass-loader)
* [node-sass](https://github.com/sass/node-sass)
* [normalize.css](https://github.com/necolas/normalize.css/)
* [uuid](https://github.com/kelektiv/node-uuid)
* [moment](https://github.com/moment/moment/)
* [standard](https://github.com/standard/standard), [prettier-standard](https://github.com/sheerun/prettier-standard)
* [React Dev Tools Extensions](https://github.com/facebook/react-devtools)
* [Redux Dev Tools Extensions](https://github.com/zalmoxisus/redux-devtools-extension)

## Installation
Install <a href="https://nodejs.org" target="_blank">Node.js</a>
``` code
npm install -g yarn
git clone https://github.com/hlukashanets/blog-app.git
cd blog-app
yarn install
```
## Running dev server
``` code
yarn run dev-server
```
Server is running on port `8080`.
Go to: `http://localhost:8080`

## Building production
``` code
yarn run build:prod
```
It generates static file `public/dist/bundle.js`.

You can run `public/index.html`