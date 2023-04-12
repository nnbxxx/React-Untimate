import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { show, fetchListUser, userUpdate, setUserUpdate } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  useEffect(() => {
    if (!_.isEmpty(userUpdate)) {
      setEmail(userUpdate.email);
      setUsername(userUpdate.username);
      setRole(userUpdate.role);
      setImage("");
      userUpdate.image &&
        setPreviewImage(`data:image/jpeg;base64,${userUpdate.image}`);
    }
  }, [userUpdate]);

  const handleClose = () => {
    props.setShow(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setImage("");
    setRole("USER");
    setPreviewImage("");
    setUserUpdate({});
  };
  const handleSubmitCreateUser = async () => {
    //validate
    //call api
    let data = await putUpdateUser(userUpdate.id, password, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      await fetchListUser();
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      handleClose();
    }
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
                disabled
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
                disabled
              />
            </div>

            <div className='col-md-6'>
              <label className='form-label'> Role</label>
              <select
                className='form-select'
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                value={role}
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
