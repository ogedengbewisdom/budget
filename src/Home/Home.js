import NavBar from "./NavBar"
import Logo from "./Logo"
import classes from  "./Home.module.css"


const Home = (props) => {
    return (
        <div className={classes.header}>
            <Logo />
            <NavBar />
            
        </div>
    )
}

export default Home