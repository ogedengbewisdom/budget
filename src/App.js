import React, { Fragment, useContext } from "react";
import Home from "./Home/Home";
import Logins from "./Logins/Logins";
import AuthorizeProps from "./Store/auth_context";

function App() {

  const authctx = useContext(AuthorizeProps)

  return (
    <Fragment>
      <Home />
      {!authctx.isLogin && <Logins />}
    </Fragment>
  );
}

export default App;
