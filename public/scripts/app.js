'use strict';

console.log('App.js is up and running');

var app = {
  title: 'Decision Maker!',
  subTitle: 'App for practice',
  options: ['One', 'Two']
};

var user = {
  name: 'Samuel',
  age: '30',
  location: 'Maryland'
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return undefined;
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'p',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
