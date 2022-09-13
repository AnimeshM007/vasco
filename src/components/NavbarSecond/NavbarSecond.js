import classes from './NavbarSecond.module.css';

function NavbarSecond(){
    return (
        <div className={classes.navbarSecond}>
            <div className={classes.logo}>
            <img className="logo" src="https://github.com/AnimeshM007/vasco/blob/master/public/images/nav_logo.png?raw=true" alt="logo"></img>
            </div>
            <div className={classes.navButtons}>
                <button className={classes.login}>Login</button>
                <button className={classes.createAccount}>Create Account</button>
            </div>
        </div>
    )
}

export default NavbarSecond;