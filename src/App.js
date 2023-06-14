import { useState } from "react";

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
//let counter =  1; //StateLess
let [counter,setCounter ] = useState(1); //StateFull
  // Member function :: Optional
  let likeMeAction = () => {
    counter = counter + 1;
    console.log("I m button click",counter);

    setCounter(counter);
  };


  // JSX :: VIEW :: USER-INTERFACE :: Required
  return (
    <>
    <h1>{counter}</h1>
      <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
  );
}

export default App;