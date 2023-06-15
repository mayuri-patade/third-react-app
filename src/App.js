import { useState } from "react";

function App() {
  return (
    <>
      <h1>String Exampl</h1>
      <StringDemo />
    </>
  );
}

function StringDemo() {
  let [title, setTitle] = useState("Hello World");

  let lowerCaseAction = () => {
    title = title.toLowerCase();
    console.log(title);

    setTitle(title);
  };

  let upperCaseAction = () => {
    title = title.toUpperCase();
    console.log(title);

    setTitle(title);
  };

  return (
    <>
      <h1>{title}</h1>
      <input type="button" value="Lower Case" onClick={lowerCaseAction} />
      <input type="button" value="Upper Case" onClick={upperCaseAction} />
    </>
  );
}

export default App;