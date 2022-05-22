import classes from './games.module.css';

function Games()
{
    return(
        <div className={`${classes.gamesPage} page block`}>
            <b className={classes.gamesPage__header}>text-header</b>
            <p className={classes.gamesPage__text}>main-text</p>
        </div>
    )
}

export default Games;