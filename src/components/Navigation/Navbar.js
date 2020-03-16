import React,{ useState } from 'react';
import {Navbar, Nav, Modal, Button, Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const SubscribeModal = (props) =>{
    return(
    <Modal 
        size="lg"
        centered
        show={props.modalShow}
        onHide={props.onHide}
        
        >
        <div className='modal-color rounded'>
            <Modal.Header className='text-center' closeButton>
                <Modal.Title  style={{'color':'rgb(93, 25, 68)'}} id="contained-modal-title-vcenter">
                Monthly newsletter
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{'color':'rgb(93, 25, 68)'}}>
                <h4 className="mb-4">Subscribe</h4>
                <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Email" />
                <br />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button className={classes.SubscribeBtnModal}>Subscribe</Button>
                <Button className='btn btn-secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </div>
    </Modal>)
}

function NavBar(props){


    let navItemsClasses = [classes.NavItem]
    navItemsClasses.push('active')

    const [modalShow, setModalShow] = useState(false);
    
    // console.log(document.getElementById('popular').inner)

    return(
    <Navbar  className={classes.Navbar} expand="lg">
        <SubscribeModal modalShow={modalShow} onHide={()=> setModalShow(false)}/>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle className={classes.NavbarToggle} aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse className={classes.NavbarCollapse}>
            <Nav className={classes.NavItems}>
                <NavLink  to='/popular' className={classes.NavItem}>Popular</NavLink>
                <NavLink to='/now_playing' className={classes.NavItem} >Now Playing</NavLink>
                <NavLink to='/top_rated' className={classes.NavItem} >Top Rated</NavLink>
                <NavLink to='/upcoming' className={classes.NavItem} >Upcoming</NavLink>
            </Nav>
        </Navbar.Collapse>
        <Button onClick={()=> setModalShow(true)} size='lg' className={classes.SubscribeBtn}>Subscribe</Button>
    </Navbar>
    )
}

export default NavBar;