import React from 'react'
import './Home.css'

//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

//logo img
import Logo from '../../Assets/logo 1.JPG'
//BG
import bg from '../../Assets/BG-img.JPG'
//icon
import {BsPersonCircle} from 'react-icons/bs'
//page
import Popup from '../Modal/Popup'
//state
import { useState } from 'react'

const Home = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container main">
        <div className="row">
                {/* Nav link */}
            <div className="col-9">
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} alt="logo" width="50" height="25"/>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className='nav' href="/">PRODUCT</Nav.Link>
                            <Nav.Link className='nav' href="/">WHO WE SERVE</Nav.Link>
                            <Nav.Link className='nav' href="/">PRICING</Nav.Link>
                        </Nav>
                        <div className='button'>
                            <Button 
                                variant="primary"
                                className='btn btn-primary'>
                                LOG IN
                            </Button>
                            <Button
                                onClick={ () => setOpenModal(true)} 
                                variant="primary"
                                className='btn btn-success'
                                > 
                                GET STARTED
                            </Button>
                            <Popup
                            open={openModal} 
                            onClose={() => setOpenModal(false)} />
                        </div>
                    </Container>
                </Navbar>
            </div>

                {/* Colume 1 */}

        <div className="col-4">
            <div className='icon-check'>
                <span className='logo-container'>
                    <BsPersonCircle className='logo-contact'/>
                </span>
            </div>

            <div className='main-text'>
                <h1 className='text-content'>
                    Track Your Employees'
                    Time and Automate
                    Your Timesheets.
                </h1>
            </div>
            <hr/>

            <div className='p-text'>
                <p className='details'>
                    Asiiko helps you track your employees' time and automate timesheets.
                    Every day, real-time updates that let you keep on top of your team's job activities.
                </p>
            </div>

            <div className='btn-details'>
                <button 
                onClick={() => setOpenModal(true)} 
                type="button" 
                className="btn btn-primary"
                >
                GET STARTED TODAY
                </button>
                <Popup 
                    open={openModal} 
                    onClose={() => setOpenModal(false)} />
                <button 
                type="button" 
                className="btn btn-success">
                LEARN MORE
                </button>
            </div>
        </div>

        {/* Colume 2 */}
        <div className="col-6 background">
            <div className='bg-img'>
            <img src={bg} alt="bg"/>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Home
