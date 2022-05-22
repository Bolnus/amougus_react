import classes from './header.module.css';

function Header()
{
    return(
        <div className={`${classes.header} ${classes.header_geometry} block`}>
            <p className={classes.headerName}>AMOGUS MINIGAME</p>
        </div>
    )
}

export default Header;