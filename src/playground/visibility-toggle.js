let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>These are some details you can now see!</p>
        </div>
      )}
      <p></p>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
