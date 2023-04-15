import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const handleUpLoadFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmitQuiz = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      toast.error("Name/Description is required");
      return;
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    "🚀 ~ file: ManageQuiz.js:22 ~ handleSubmitQuiz ~ res:", res;
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setType("");
      setImage("");
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className='quiz-container'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Manage Quizes</Accordion.Header>
          <Accordion.Body>
            <div className='add-new'>
              <form action='/action_page.php'>
                <fieldset className='border rounded-3 p-3'>
                  <legend className='float-none w-auto px-3'>
                    Add new Quiz:
                  </legend>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Your quiz name'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <label>Name</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Description...'
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <label>Description</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <Select
                      // value={selectedOption}
                      // onChange={this.handleChange}
                      defaultValue={type}
                      options={options}
                      placeholder='Quiz type ...'
                      onChange={setType}
                    />
                  </div>
                  <div className='more-actions mb-3'>
                    <label className='mb-2'>Upload Image</label>
                    <input
                      type='file'
                      className='form-control'
                      onChange={(e) => handleUpLoadFile(e)}
                    />
                  </div>
                  <div>
                    <button
                      className='btn btn-primary '
                      onClick={(e) => {
                        handleSubmitQuiz(e);
                      }}
                    >
                      Save
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className='list-detail'>
        <TableQuiz />
      </div>
    </div>
  );
};
export default ManageQuiz;
