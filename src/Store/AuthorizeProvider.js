import { useState } from "react"
import AuthorizeProps from "./auth_context"


const AuthorizeProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)

    const loginHandler = (email, password) => {
        setIsLogin(true);
    }

    const logoutHandler = () => {
        setIsLogin(false)
    }

    const properties = {
        isLogin: isLogin,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }

    return (

            <AuthorizeProps.Provider value = {properties}>
                {props.children}
            </AuthorizeProps.Provider>
            
    )
}

export default AuthorizeProvider