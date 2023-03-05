import React, { Fragment, useContext } from "react";
import Home from "./Home/Home";
import Logins from "./Logins/Logins";
import AuthorizeProps from "./Store/auth_context";
import ReactDOM from "react-dom";
import Expenses from "./Expenses/Expenses";
import ExpenseCtxProvider from "./Store/ExpenseCtxProvider";
import NewExpense from "./NewExpense/NewExpense";

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
      <NewExpense /> 
      <ExpenseCtxProvider>
          <Expenses />
      </ExpenseCtxProvider>     
    </Fragment>
  );
}

export default App;
