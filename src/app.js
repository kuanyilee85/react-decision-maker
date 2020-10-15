console.log('App.js is up and running');

var app = {
  title: 'Decision Maker!',
  subTitle: 'App for practice',
  options: ['One', 'Two'],
};

var user = {
  name: 'Samuel',
  age: '30',
  location: 'Maryland',
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return undefined;
  }
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{user.name ? user.name : 'Anonymous'}</p>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
