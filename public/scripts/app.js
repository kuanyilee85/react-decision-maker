'use strict';

console.log('App.js is up and running');

var appObject = {
  title: 'Decision Maker!',
  subTitle: 'App for practice'
};

var user = {
  name: 'Samuel',
  age: '30',
  location: 'Maryland'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  React.createElement(
    'h2',
    null,
    appObject.subTitle
  ),
  React.createElement(
    'p',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
