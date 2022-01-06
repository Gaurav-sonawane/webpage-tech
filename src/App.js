import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [list, setList] = useState([]);

  const tweet = () => {
    const newList = [...list, "hello world"];

    setList(newList);
  };

  const deletetweet = () => {
    list.splice(0, 1);

    const newList = [...list];
    setList(newList);
  };

  return (
    <div>
      <h1>Working with input element</h1>
      <input type="button" value="tweet" onClick={tweet} />
      <input type="button" value="delete" onClick={deletetweet} />

      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
