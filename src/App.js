import { useState } from "react";

export default function App() {
  return (
    <div>
      <Myfun />
    </div>
  );
}

function Myfun() {
  const [msg, setMsg] = useState("");

  const changeContaint = (e) => {
    setMsg(e.target.value);
  };
  return (
    <div>
      <h1>input Box</h1>
      <input
        type="text"
        placeholder="type here"
        onChange={changeContaint}
        className="form-control"
      />

      <div>{msg}</div>
    </div>
  );
}
