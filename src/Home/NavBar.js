import { useContext } from "react"
import AuthorizeProps from "../Store/auth_context"
import classes from "./NavBar.module.css"

const NavBar = () => {

    const authctx = useContext(AuthorizeProps)
    return (
        <div className={classes.mar}>
        <nav className={classes.navs}>
            <ul>
                {authctx.isLogin && <li><a href="/">HOME</a></li>}
                {authctx.isLogin && <li><a href="/">Expenses</a></li>}
                {authctx.isLogin && <li><a href="/">Chart</a></li>}
                {authctx.isLogin && <li><button onClick={authctx.onLogout}>Logout</button></li>}
            </ul>
        </nav>
        </div>
    )
}

export default NavBar