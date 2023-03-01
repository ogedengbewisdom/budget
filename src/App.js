import React, { Fragment, useContext } from "react";
import Home from "./Home/Home";
import Logins from "./Logins/Logins";
import AuthorizeProps from "./Store/auth_context";
import ReactDOM from "react-dom";

function App() {

  const authctx = useContext(AuthorizeProps)

  const homePortal = (props) => {
    return <Home />
  }

  const loginsPortal = props => {
    return {!authctx.isLogin && <Logins />}
  }

  return (
    <Fragment>  
      {ReactDOM.createPortal(<loginsPortal />, document.getElementById("do"))}  
    </Fragment>
  );
}

export default App;
