import "./ManageQuiz.scss";
import Select from "react-select";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
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
              />
              <label>Name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Description...'
              />
              <label>Description</label>
            </div>
            <div className='form-floating mb-3'>
              <Select
                // value={selectedOption}
                // onChange={this.handleChange}
                options={options}
                placeholder='Quiz type ...'
              />
            </div>
            <div className='more-actions mb-3'>
              <label>Upload Image</label>
              <input type='file' className='form-control' />
            </div>
          </fieldset>
        </form>
      </div>
      <div className='list-detail'> table</div>
    </div>
  );
};
export default ManageQuiz;
