import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Add() {
  
  
   
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
  
  return (
    <>
    <button onClick={handleShow}  className='btn'><i class="fa-solid fa-plus me-1"></i> Banking Details</button>
    <Modal
    size='lg'
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title> Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row align-items-center">
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-8">
           <div className='mb-2'> 
            <input type="text" className='form-control' placeholder='Bank Name' />
          </div>
          <div className='mb-2'> 
            <input type="text" className='form-control' placeholder='Username' />
          </div>
          <div className='mb-2'> 
            <input type="text" className='form-control' placeholder='Account number'  />
          </div>
          <div className='mb-2'> 
            <input type="text" className='form-control' placeholder='ifce'   />
          </div>
          </div>
        </div>
        <div className='mb-2 mt-3'> 
            <input type="text" className='form-control' placeholder='Bank Balance'  />
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"  >Add</Button>
      </Modal.Footer>
    </Modal>
 
  </>
  )
}

export default Add