

var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(
      'h1',
      null,
      'Main Content'
    ),
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-12 col-md-6' },
        'Content'
      ),
      React.createElement(
        'div',
        { className: 'col-12 col-md-6' },
        'Content'
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));