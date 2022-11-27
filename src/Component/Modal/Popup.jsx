import React from 'react'
import './Popup.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

//logo
import logo from '../../Assets/logo 2.JPG'


const Popup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
  <>
     <Button
        onClick={handleShow}
        variant="primary"
        className='btn btn-success'
        > GET STARTED
      </Button>

    <Modal show={show} onHide={handleClose} className='modal-container'>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title m-3'>Start using Asiiko for your team today!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="container">
        <div className="row role-cover mt-4 mb-3">
          <div className="role-1">
            <div className='roles-1'>
              <h5 className='role-title-1'>
                For Organization
              </h5>
              <div className="btn-1">
                <button type="button" class="btn btn-primary">LOG IN</button>
                <button type="button" class="btn btn-light">SIGN UP</button>
              </div>
            </div>
          </div>
          <div className="role-2">
            <div className='roles-2'>
            <h5 className='role-title-2'>
              For Workers
            </h5>
              <div className="logo-1">
                <img src={logo} alt='logo' width="200px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default Popup
