import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add new user
      </Button>

      <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class='row g-3'>
            <div class='col-md-6'>
              <label for='inputEmail4' class='form-label'>
                Email
              </label>
              <input type='email' class='form-control' id='inputEmail4' />
            </div>
            <div class='col-md-6'>
              <label for='inputPassword4' class='form-label'>
                Password
              </label>
              <input type='password' class='form-control' id='inputPassword4' />
            </div>
            <div class='col-12'>
              <label for='inputAddress' class='form-label'>
                Address
              </label>
              <input
                type='text'
                class='form-control'
                id='inputAddress'
                placeholder='1234 Main St'
              />
            </div>
            <div class='col-md-4'>
              <label for='inputState' class='form-label'>
                State
              </label>
              <select id='inputState' class='form-select'>
                <option selected value={"USER"}>
                  USER
                </option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>

            <div class='col-12'>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='gridCheck'
                />
                <label class='form-check-label' for='gridCheck'>
                  Check me out
                </label>
              </div>
            </div>
            <div class='col-12'>
              <button type='submit' class='btn btn-primary'>
                Sign in
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ManageUser = (props) => {
  return (
    <div className='manage-user-container'>
      <div className='title'>Manager Users</div>
      <div className='manage-user-content'>
        <button>Add new user</button>
        <div>
          Table users
          <Example></Example>
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
