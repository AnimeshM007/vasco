import classes from './NavbarSecond.module.css';

function NavbarSecond(){
    return (
        <div className={classes.navbarSecond}>
            <div className={classes.logo}>
            <img className="logo" src="http://127.0.0.1:8887/src/images/nav_logo.png" alt="logo"></img>
            </div>
            <div className={classes.navButtons}>
                <button className={classes.login}>Login</button>
                <button className={classes.createAccount}>Create Account</button>
            </div>
        </div>
    )
}

export default NavbarSecond;