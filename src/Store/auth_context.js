import React from "react"


const AuthorizeProps = React.createContext({
    isLogin: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
})

export default AuthorizeProps