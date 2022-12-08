

const App = () => {
  return (
    <Template>
      <h1>Main Content</h1>
      <div className='row'>
        <div className='col-12 col-md-6'>
          Content
        </div>
        <div className='col-12 col-md-6'>
          Content
        </div>
      </div>
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);