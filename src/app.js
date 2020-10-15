console.log('App.js is up and running');

const app = {
  title: 'Decision Maker!',
  subTitle: 'App for practice',
  options: [],
};

const numbers = [11, 33, 55];

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
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={onRemoveAll}>Remove all</button>
      </form>

      <h3>Practice:</h3>

      <p>map a JSX array</p>
      {numbers.map((number) => {
        return <p key={number}>number: {number}</p>;
      })}

      <p>inline JSX array:</p>
      {[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
