import React, { Fragment, useContext } from "react";
import Home from "./Home/Home";
import Logins from "./Logins/Logins";
import AuthorizeProps from "./Store/auth_context";
import ReactDOM from "react-dom";

function App() {

  const authctx = useContext(AuthorizeProps)

  const HomePortal = () => {
    return (<Home />)
  }

  const LoginPortal = () => {
    return !authctx.isLogin && <Logins />
  }



  return (
    <Fragment>  
      {ReactDOM.createPortal(<HomePortal />, document.getElementById("header"))} 
      {ReactDOM.createPortal(<LoginPortal />, document.getElementById("login"))}      
    </Fragment>
  );
}

export default App;
