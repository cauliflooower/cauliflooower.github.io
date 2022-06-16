import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.logoBlock}>
      <div className={classes.logo}></div>
      <div className={classes.logoName}>Strange</div>
    </div>
  )
}

export default Header;  