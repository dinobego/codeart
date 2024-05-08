import { useContext } from "react"

import Button from "components/button"

import notify from "utils/notify"

import { UserContext } from "context/user"

import { logout } from "api/user";

import "./style.css"

export default function Header() {
  const { user } = useContext(UserContext)

  const logoutMe = async () => {
    try {
      const { data } = await logout()

      if(data.success || data.responseCodes?.[0]?.responseKey === "NO_SESSION") {
        window.location.href = "/"
      } else {
        notify("Something went wrong", "error")
      }
    } catch(e) {
      notify("Something went wrong", "error")
    }
  }

  return (
    <header>
      <div>Hello {user.username}</div>

      <Button text="Logout" onClick={logoutMe} className="logoutBtn" />
    </header>
  )
}
