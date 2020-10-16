'use strict';

console.log('App.js is up and running');

var app = {
  title: 'Decision Maker!',
  subTitle: 'App for practice',
  options: []
};

var numbers = [11, 33, 55];

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var pickedOption = app.options[randomNum];
  alert(pickedOption);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
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
      app.options.length
    ),
    React.createElement(
      'p',
      null,
      'Here are your options:'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      ),
      React.createElement(
        'button',
        { onClick: onRemoveAll },
        'Remove all'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: onMakeDecision },
        'What should I do?'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
