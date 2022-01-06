import { useState } from "react";

export default function App() {
  return (
    <div>
      <Myfun />
    </div>
  );
}

function Myfun() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    counter = counter + 1;

    setCounter(counter);
  };
  return (
    <div>
      <div>
        <h1>counter application</h1>
        <input type="button" value="click me" onClick={increment} />
      </div>
      <h1>Like {counter} </h1>
    </div>
  );
}
