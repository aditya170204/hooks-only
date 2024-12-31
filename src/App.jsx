import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      document.title = `${count} new message!`;
    }, 2000);
  }, [handleCount]);
  function handleCount() {
    setCount((count) => count + 1);
    {
      handleCount ? console.log(`clicked ${count + 1} times`) : null;
    }
  }
  function handleCountNeg() {
    setCount((count) => count - 1);
    {
      handleCountNeg ? console.log(`clicked ${count - 1} times`) : null;
    }
  }

  return (
    <>
      <h1>what's the count</h1>
      <button onClick={handleCount}>count : {count}</button> <br />
      <br />
      <button onClick={handleCountNeg}>count -</button>
    </>
  );
}

export default App;
