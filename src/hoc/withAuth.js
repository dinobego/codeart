import { useState } from "react"

import { checkSession } from "api/user";

import { AUTH_TOKEN } from "constants/index"

function withAuth(Component) {
  return function() {
    const [state, setState] = useState()

    checkSession().then(({ data }) => {
      if(data.timestamp) {
        setState(true)
      } else {
        window.location.href = "/login"

        localStorage.removeItem(AUTH_TOKEN)
      }
    }).catch(() => {
      window.location.href = "/login"
      localStorage.removeItem(AUTH_TOKEN)
    })

    return state ? <Component /> : null
  }
}

export default withAuth
