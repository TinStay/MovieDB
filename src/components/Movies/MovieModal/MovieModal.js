import React, {  Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import classes from './MovieModal.module.css';
// import axios from '../../../axios';

class movieModal extends Component{
    
    render(){

    const baseUrl = 'https://image.tmdb.org/t/p/';
    const posterSize = 'w500';
    const url = ''.concat(baseUrl, posterSize, this.props.poster)
    let genres = null;
    let filteredGenres = [];
    let modalClasses = [classes.Modal, 'row']


    genres = this.props.genres.filter( genre => (
        this.props.movieGenres.includes(genre.id)
        )
    )
    // console.log(genres)
    
    filteredGenres = genres.map(genre => {
        return genre['name']
    }).join(', ');
    
    
    // console.log(filteredGenres);

    return(
        <Modal show={this.props.show} onHide={this.props.close} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className={modalClasses.join(' ')}>

            <div className='col-md-6 text-center'>
                <img className={classes.Img} alt={this.props.title} src={url}/>
            </div>

            <div className='col-md-6'>
                <Modal.Header closeButton>
                    <Modal.Title className={classes.MovieTitle}>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body className={classes.ModalBody}>
                    <h4 className={classes.MoviePropsTitle}>Genre:</h4>
                    <p className={classes.MovieOverview}>
                        {filteredGenres}
                    </p>
                    <h4 className={classes.MoviePropsTitle}>Avarage vote:</h4>
                    <p className={classes.MovieOverview}>
                        {this.props.vote_average}
                    </p>
                    <h4 className={classes.MoviePropsTitle}>Overview</h4>
                    <p className={classes.MovieOverview}>
                        {this.props.overview}
                    </p>
                    <Modal.Footer>
                    <Button className={classes.ModalCloseBtn} onClick={this.props.close}>Return</Button>
                    </Modal.Footer>
                </Modal.Body>
            </div>
        </div>
      </Modal>
        
    )
}
}

export default movieModal;




