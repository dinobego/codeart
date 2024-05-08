import { useState, useContext } from "react"

import Button from "components/button"
import Input from "components/input"

import { AUTH_TOKEN, AUTH_HEADER_KEY } from "constants/index"

import { UserContext } from "context/user"

import { login } from "api/user";

import notify from "utils/notify"

import "./style.css";

const errorMessages = {
  "ALREADY_IN_SESSION": "User already logged in",
  "INVALID_USERNAME_OR_PASSWORD": "Invalid credentials"
}

export default function Login() {
  const [payload, setPayload] = useState({})

  const { setUser } = useContext(UserContext)

  const payloadChanged = (value, key) => setPayload(prevState => ({ ...prevState, [key]: value }))

  const loginUser = async (e) => {
    e.preventDefault();

    if(["username", "password"].some(key => !payload[key])) {
      notify("Username and password are required!", "error")
      return;
    }

    try {
      const { data, response } = await login(payload);

      if(data?.success) {
        setUser(data.data)

        localStorage.setItem(AUTH_TOKEN, response.headers.get(AUTH_HEADER_KEY))

        window.location.href = "/"
      } else {
        const message = errorMessages[data?.responseCodes?.[0]?.responseKey] || "Something went wrong"

        notify(message, "error")
      }
    } catch(e) {
      notify("Something went wrong", "error")
    }
  };

  return (
    <div className="container">
      <form className="loginDiv" onSubmit={loginUser}>
        <h1 className="loginTitle">Login</h1>

        <Input placeholder="Username" type="text" label={"Username"} value={payload.username || ""} onChange={e => payloadChanged(e.target.value, "username")} />
        <Input placeholder="Password" type="password" label={"Password"} value={payload.password || ""} onChange={e => payloadChanged(e.target.value, "password")} />

        <Button text="Login" type="submit" />
      </form>
    </div>
  );
}
