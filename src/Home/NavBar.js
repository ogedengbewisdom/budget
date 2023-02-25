import classes from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={classes.mar}>
        <nav className={classes.navs}>
            <ul>
                <li>HOME</li>
                <li>Expenses</li>
                <li>Chart</li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar