'use strict';

console.log('server is up and running');
// var template = React.createElement('p', null, 'This is JSX from app.js');
var template = React.createElement(
  'h1',
  null,
  'This is JSX from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
