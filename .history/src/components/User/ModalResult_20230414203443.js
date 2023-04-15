import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiService";
import { toast } from "react-toastify";
const ModalResult = (props) => {
  const { show, setShow, userDelete, fetchListUser } = props;
  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(userDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      // await fetchListUser();
      props.setCurrentPage(1);
      await props.fetchListUserWithPaginate(1);
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
          <b> {userDelete && userDelete.email ? userDelete.email : ""}</b>
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

export default ModalResult;
