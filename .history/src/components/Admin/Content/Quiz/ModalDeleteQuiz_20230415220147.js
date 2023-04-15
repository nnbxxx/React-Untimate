import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteQuiz } from "../../../../services/apiService";
const ModalDeleteQuiz = (props) => {
  const { show, setShow, quizDelete } = props;
  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = async () => {
    let data = await deleteQuiz(quizDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      // await fetchListUser();
      // load lại list quiz
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
          Are you sure delete this Quiz.id:{" "}
          <b> {quizDelete && quizDelete.id ? quizDelete.id : ""}</b>
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

export default ModalDeleteQuiz;
