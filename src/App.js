// User Defined Tag: <App />
function App() {
  return (
    <>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}

// User Defined Tag: <AppHeader />
function AppHeader() {
  return (
    <div className="row bg-success text-light p-3 fs-1">
      <div className="col">Home</div>
      <div className="col">Project</div>
      <div className="col">AboutUs</div>
    </div>
  );
}

// User Defined Tag: <AppBody />
function AppBody() {
  return (
    <>
      <h1>App Body</h1>
    </>
  );
}

// User Defined Tag: <AppFooter />
function AppFooter() {
  return (
    <>
      <h1>App Footer</h1>
    </>
  );
}

export default App;