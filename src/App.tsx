import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [yay, setYay] = useState<string>("");
  const [userErr, setUserErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userId === "shit" && password === "fuck") {
      setYay("yay you did it  right");
    }
    if (userId !== "shit") {
      setUserErr(true);
      setUserId("");
    }
    if (password !== "fuck") {
      setPasswordErr(true);
      setPassword("");
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
          <input
            type="text"
            id="userid"
            required
            style={{ borderColor: userErr ? "red" : "initial" }}
            onChange={({ target }) => setUserId(target.value)}
          />
          <br />
          <input
            type="password"
            id="password"
            required
            style={{ borderColor: passwordErr ? "red" : "initial" }}
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
