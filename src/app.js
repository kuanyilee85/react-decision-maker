console.log('App.js is up and running');

const app = {
  title: 'Decision Maker!',
  subTitle: 'App for practice',
  options: [],
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return undefined;
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

const onRemoveAll = () => {
  app.options = [];
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <p>Here are your options:</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={onRemoveAll}>Remove all</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
