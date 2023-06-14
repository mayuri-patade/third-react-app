function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

// UserDefineTag
function CounterApp() {

let counter = 100;
  // Member function :: Optional
  let likeMeAction = () => {
    console.log("I m button click");
  };


  // JSX :: VIEW :: USER-INTERFACE :: Required
  return (
    <>
      <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
  );
}

export default App;