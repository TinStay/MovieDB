import React from 'react';

import classes from './Footer.module.css';

const footer = (props) => {
    return(
        <div className={classes.Footer}>
            <div className='container'>
                <p >This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
        </div>
    )
}

export default footer;