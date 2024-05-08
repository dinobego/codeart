import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="loginDiv">
        <h1 className="loginTitle">Login</h1>
        <input className="usernameInput" placeholder="Username" />
        <input className="passInput" placeholder="Passsword" type="password" />
        <button className="loginBtn">Login</button>
      </div>
    </div>
  );
}

export default App;
