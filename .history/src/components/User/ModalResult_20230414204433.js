import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalResult = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Your Result is: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Total Question: 20</div>
          <div>Total Correct Answer: 9</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Show Answers
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalResult;
