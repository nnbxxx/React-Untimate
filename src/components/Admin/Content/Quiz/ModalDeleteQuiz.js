import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteQuiz } from "../../../../services/apiService";
const ModalDeleteQuiz = (props) => {
  const { show, setShow, quizData, fetchQuiz } = props;
  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = async () => {
    let data = await deleteQuiz(quizData.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      await fetchQuiz();
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
          Are you sure delete this Quiz.Id:{" "}
          <b> {quizData && quizData.id ? quizData.id : ""}</b>
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
