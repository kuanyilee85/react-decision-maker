console.log('App.js is up and running');

var appObject = {
  title: 'Decision Maker!',
  subTitle: 'App for practice',
};

var user = {
  name: 'Samuel',
  age: '30',
  location: 'Maryland',
};

const template = (
  <div>
    <h1>{appObject.title}</h1>
    <h2>{appObject.subTitle}</h2>
    <p>{user.name}</p>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
