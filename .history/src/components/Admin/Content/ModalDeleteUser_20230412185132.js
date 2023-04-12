import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiService";
const ModalDeleteUser = (props) => {
  const { show, setShow, userDelte } = props;
  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = () => {
    let data = await postCreateNewUser(email, username, password, role, image);
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
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Comfirm Delete This User ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete this user.Email:{" "}
          <b> {userDelte && userDelte.email ? userDelte.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSubmitDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
