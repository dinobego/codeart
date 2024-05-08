import withAuth from "hoc/withAuth"

import Header from "components/header"

import "./style.css";

function Home() {
  return (
    <div className="containerHome">
      <Header />
      Protected Home
    </div>
  )
}

export default withAuth(Home)
