import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const fetchContaint = (e) => {
    setMsg(e.target.value);
  };

  const tweetHere = () => {
    const newList = [msg, ...list];
    setList(newList);
    setMsg("");
  };

  return (
    <div>
      <h1>tweeter</h1>
      <div>
        <input type="text" onChange={fetchContaint} placeholder="tweet here" />
        <input type="button" value="tweet" onClick={tweetHere} />
      </div>
      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
