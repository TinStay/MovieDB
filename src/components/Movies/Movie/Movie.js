import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import classes from './Movie.module.css';

function Movie(props){
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const posterSize = 'w300';
    const url = ''.concat(baseUrl, posterSize, props.poster)

    const [onHover, setOnHover] = useState(false);

    let ImgClasses= [classes.CardImg,]
    if(onHover){
        ImgClasses.push('')
    }

    return(
        <div className='container text-center col-md-12 mb-4 mt-4 pictureWidth'>
            <div className={classes.Movie}>
                
                <img className={classes.CardImg} 
                alt={props.title} 
                src={url}
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}></img>

                <div className={classes.MovieInfo}>
                    <h4>{props.title}</h4>
                    <h6>{props.release_date}</h6>
                    <h6>Popularity: {props.popularity.toFixed()}</h6> 
                    <Button className={classes.OverviewBtn} onClick={props.click}>Overview</Button> 
                </div>
                <h4 className={classes.MovieTitle}>{props.title}</h4> 
            </div>
             
            
            
        </div>
        
    )
}

export default Movie;