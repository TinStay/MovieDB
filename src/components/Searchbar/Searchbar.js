import React from 'react';
import {Form, Button} from 'react-bootstrap';
import classes from './Searchbar.module.css';
import logo from '../../assets/moviedb.png';



const searchbar = (props) => {

    let jumbotronClasses = [classes.Jumbotron,]

    if(props.isJumbotronClosed){
        jumbotronClasses.push('not-displayed')
    }

    return(
        <div className='container-fluid'>
            <div className={jumbotronClasses.join(' ')}>
            <div className={classes.TiltBack}>
                <div className='col-md-6 offset-md-3'>
                

                    <h1 className='border-bottom mb-3 p-2'><img  className={classes.Logo} src={logo}/></h1>
                    <h5 className={classes.JumboText}>Browse movies from 4 different categories and read more about them.
                    Our Monthly newsletter will tell you everything you need to know about celebrities and their upcoming movies.</h5>
                    <h5 className={classes.JumboText}> Click the <span className='active'>Subscribe</span> button on the top right corner for more information.</h5>
                    <button onClick={props.closeJumbotron} className='btn btn-outline-secondary mt-4 mb-4' >Close</button>
                </div>
                
            </div>
        </div>

        <div className='container text-center mt-5'>
            <h1 className='letter-space col-md-6 offset-md-3 border-bottom active pb-3 mt-4'>Explore</h1>
        <Form className={classes.Form}>
        <Form.Control className='col-md-6 offset-md-3 mt-4' type="text" placeholder="Search for a movie..." onChange={props.changeKeyword}/>
        </Form>   
        </div> 

        </div>
    )
}

export default searchbar;