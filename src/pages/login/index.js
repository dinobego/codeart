import { login } from "api/user";

import "./style.css";

export default function Login() {
  const loginUser = (e) => {
    e.preventDefault();

    login("sercan", "1234");
  };

  return (
    <div className="container">
      <form className="loginDiv" onSubmit={loginUser}>
        <h1 className="loginTitle">Login</h1>
        <input className="usernameInput" placeholder="Username" />
        <input className="passInput" placeholder="Passsword" type="password" />
        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
