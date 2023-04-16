import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import _ from "lodash";
import { putUpdateQuiz } from "../../../../services/apiService";

const ModalUpdateQuiz = (props) => {
  const { show, setShow, fetchQuiz, quizData, setQuizData } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  useEffect(() => {
    if (!_.isEmpty(quizData)) {
      setName(quizData.name);
      setDescription(quizData.description);
      setDifficulty(quizData.difficulty);
      setImage("");
      quizData.image &&
        setPreviewImage(`data:image/jpeg;base64,${quizData.image}`);
    }
  }, [quizData]);

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setDifficulty("");
    setImage("");
    setPreviewImage("");
    setQuizData({});
  };

  const handleSubmitUpdateQuiz = async () => {
    //validate
    if (!name || !description || !image) {
      toast.error("Name/ Description/ Image is required");
      handleClose();
      return;
    }
    //call api

    let data = await putUpdateQuiz(
      quizData.id,
      description,
      name,
      difficulty,
      image
    );
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

  const handleUpLoadFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size='xl'
        backdrop='static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Quizz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='row g-3'>
            <div className='col-md-6'>
              <label className='form-label'> Name: </label>
              <input
                type='text'
                className='form-control'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='col-6'>
              <label className='form-label'> Description</label>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className='col-md-6'>
              <label className='form-label'> Type </label>
              <select
                className='form-select'
                onChange={(e) => {
                  setDifficulty(e.target.value);
                }}
                value={difficulty}
              >
                <option value={"EASY"}>EASY</option>
                <option value={"MEDIUM"}>MEDIUM</option>
                <option value={"HARD"}>HARD</option>
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
              handleSubmitUpdateQuiz();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateQuiz;
