import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
const ModalCreateUser = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpLoadFile = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add new user
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size='xl'
        backdrop='static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='row g-3'>
            <div className='col-md-6'>
              <label className='form-label'> Email</label>
              <input
                type='email'
                className='form-control'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='col-6'>
              <label className='form-label'> UserName</label>
              <input
                type='text'
                className='form-control'
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'> Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className='col-md-6'>
              <label className='form-label'> Role</label>
              <select
                className='form-select'
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value={"USER"}>USER</option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label
                className='form-label label-upload-file'
                htmlFor='labelUpload'
              >
                {" "}
                <FcPlus /> Up Load File Image
              </label>
              <input
                type='file'
                className='form-control'
                hidden
                id='labelUpload'
                onChange={(e) => handleUpLoadFile(e)}
              />
            </div>
            <div className='col-md-12 img-preview'>
              <img src='https://images.unsplash.com/photo-1680786671088-8eeb95f16a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
              {/* <span>Preview Image</span> */}
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
};
export default ModalCreateUser;
