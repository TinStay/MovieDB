import React,{ memo} from 'react';
import Movie from './Movie/Movie';
import MovieModal from './MovieModal/MovieModal';



const movies = (props) =>{
    let movieModal = null;
    let movieList = <p className='text-center'style={{'color': 'white', 'fontSize':'2rem'}}>Loading movies...</p>;

    const movie = props.movie

    if(props.isModalOpened){    
        // console.log(props.movie)
        movieModal = (
            <MovieModal 
            show ={props.isModalOpened}
            close={props.closeMovieModal}
            id={movie.id}
            title={movie.title}
            genres={props.genres}
            movieGenres={movie.genre_ids}
            overview={movie.overview}
            vote_average={movie.vote_average}
            poster={movie.poster_path}/>
        )
    }

    const filterMovies = search => {
        return movie => movie.title.toLowerCase().includes(search.toLowerCase());
    }

    

    if(props.movies){
        let filteredMovies = props.movies.filter(filterMovies(props.search))
        // console.log(filteredMovies)
        
        if(filteredMovies.length === 0){

        movieList = <h3 className='text-center'style={{'color': 'white'}}>
            No movies found with the following keyword: {props.search}</h3>

        }else{
            movieList = (
                <div className='row '>
                    {filteredMovies.map( movie =>(
                        <div className='col-md-4' key={movie.id}>
                        <Movie 
                            title={movie.title}
                            release_date={movie.release_date}
                            overview={movie.overview}
                            poster={movie.poster_path}
                            id={movie.id}
                            popularity={movie.popularity}
                            click={() => props.openMovieHandler(movie.id)}
                            />
                        </div>
                    )
                )}
                </div>
            )
        }
    }

        
        

    return(
        <div className='container'>
            {movieModal}
            {movieList}
        </div>
    )
    
    
}

export default memo(movies);