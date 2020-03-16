import React, { Component } from 'react';
import Movies from '../../components/Movies/Movies';
import Searchbar from '../../components/Searchbar/Searchbar';
import axios from '../../axios';

// const api_key = process.env.REACT_APP_MOVIEDB_API_KEY
// console.log(api_key)

class MovieSearch extends Component{

    state = {
        movies: null,
        genres: [],
        movie: {},
        search: '',
        isModalOpened: false,
        isJumbotronClosed: false
    }

    

    
    componentDidMount(){
        console.log(this.props);
        let url = this.props.match.url
        // console.log(url);

        axios.get(`/movie${url}?api_key=${api_key}&language=en-US`)
        .then(response => {
            // console.log(response)
            const movies = response.data.results
            
            // console.log(movies)
            this.setState({
                movies: movies,

            })
        }).catch(error => {
            console.log(error);      
        });
        axios.get(`genre/movie/list?api_key=${api_key}&language=en-US`)
            .then(response=>{
                // console.log(response.data.genres)
                const genres = response.data.genres
                this.setState({
                    genres: genres
                })}).catch(error => {
                    console.log(error);      
                });
        // console.log("[SearchMovie] ComponentDidMount")
        
    };


    closeJumbotron = () =>{
        this.setState({ isJumbotronClosed:true })
    }

    changeEventHandler = (e) =>{
        e.preventDefault()

        this.setState({
            search: e.target.value
        })
    }


    openMovieHandler = (movieId) =>{
        const movie = this.state.movies.find(movie =>(
            movie.id === movieId
            )
        )

        // console.log(movie)
        this.setState({
            movie: movie,
            isModalOpened: true })
    }

    closeMovieModal= () =>{
        this.setState({ isModalOpened: false })
    }

    

    

    render(){
        
        let movies = this.state.movies
        
        return(
            <div className="container-fluid">
                <Searchbar changeKeyword={this.changeEventHandler}
                isJumbotronClosed={this.state.isJumbotronClosed}
                closeJumbotron={this.closeJumbotron}

                />
                
                <div className="container mt-3">
                    <Movies 
                    // Modal props
                    movie={this.state.movie}
                    search={this.state.search}
                    isModalOpened={this.state.isModalOpened}
                    closeMovieModal={this.closeMovieModal}
                    genres={this.state.genres}
                    // Movie props
                    movies={movies}
                    openMovieHandler={this.openMovieHandler}
                    />
 
                </div>
            </div>

        )
    }
}

export default MovieSearch;