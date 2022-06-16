import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/message" className = { navData => navData.isActive ? classes.active : classes.item }>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;