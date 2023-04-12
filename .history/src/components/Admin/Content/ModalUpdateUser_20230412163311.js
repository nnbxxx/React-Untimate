import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiService";
const ModalUpdateUser = (props) => {
  const { show, fetchListUser } = props;
  const [email, setEmail] = useState("");
  setEmail(props.userUpdate.email);
  const [password, setPassword] = useState("");
  setPassword(props.userUpdate.password);
  const [username, setUsername] = useState("props.userUpdate.username");
  setPassword(props.userUpdate.password);

  const [image, setImage] = useState("");
  setPassword(props.userUpdate.password);

  const [role, setRole] = useState("");
  setPassword(props.userUpdate.password);
  const [previewImage, setPreviewImage] = useState("");
  setPassword(props.userUpdate.password);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleClose = () => {
    props.setShow(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setImage("");
    setRole("USER");
    setPreviewImage("");
  };
  const handleSubmitCreateUser = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
    } else if (!password) {
      toast.error("Invalid Password");
    }
    //call api

    // let data = await postCreateNewUser(email, username, password, role, image);
    // if (data && data.EC === 0) {
    //   toast.success(data.EM);
    //   await fetchListUser();
    //   handleClose();
    // }
    // if (data && data.EC !== 0) {
    //   toast.error(data.EM);
    //   handleClose();
    // }
  };

  const handleUpLoadFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        Add new user
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size='xl'
        backdrop='static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
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
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              handleSubmitCreateUser();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
