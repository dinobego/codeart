import withAuth from "hoc/withAuth";

import Header from "components/header";

import "./style.css";

function Home() {
  return (
    <div className="containerHome">
      <Header />
      <h1 className="h1"> Protected Home</h1>
    </div>
  );
}

export default withAuth(Home);
