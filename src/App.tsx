import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [yay, setYay] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userId === "shit" && password === "fuck"){
      setYay("yay you did it  right");
    }
    setPassword("");
    setUserId("");
  };
  const onCancel = () => {
    setPassword("");
    setUserId("");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          User:<input
            type="text"
            onChange={({ target }) => setUserId(target.value)}
          />
          <br />
          Password:<input
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <br />
          <button type="submit">Login</button>
          <button type="reset" onChange={onCancel}>
            Close
          </button>
        </form>
      </div>
      <div>{yay}</div>
    </>
  );
};

export default App;
