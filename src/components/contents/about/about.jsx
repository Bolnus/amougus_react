import classes from './about.module.css';

function About(props)
{
    props.setPage();
    return(
        <div className={`${classes.aboutPage} page block`}>
            <b className={classes.aboutPage__header}>text-header</b>
            <p className={classes.aboutPage__text}>main-text</p>
        </div>
    )
}

export default About;