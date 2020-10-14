console.log('server is up and running');
// var template = React.createElement('p', null, 'This is JSX from app.js');
const template = <h1>This is JSX from app.js</h1>;
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
