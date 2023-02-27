import { Fragment, useState } from "react";
import Home from "./Home/Home";
import Logins from "./Logins/Logins";

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const loginHandler = () => {
    setIsLogin(true)
  }
  return (
    <Fragment>
      <Home />
      {!isLogin && <Logins onLogin = {loginHandler}/>}
    </Fragment>
  );
}

export default App;
