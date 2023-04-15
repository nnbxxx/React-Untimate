import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState("");
  const handleUpdateFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className='quiz-container'>
      <div className='title'>Manage Quizes</div>
      <hr />
      <div className='add-new'>
        <form action='/action_page.php'>
          <fieldset className='border rounded-3 p-3'>
            <legend className='float-none w-auto px-3'>Add new Quiz:</legend>
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
                value={image}
                onChange={(e) => {
                  handleUpdateFile(e);
                }}
              />
            </div>
            <div>
              <button className='btn btn-primary '>Save</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className='list-detail'> table</div>
    </div>
  );
};
export default ManageQuiz;
