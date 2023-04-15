import "./ManageQuiz.scss";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
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
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                placeholder='Description...'
              />
              <label>Description</label>
            </div>
            <div>
              <Select
                // value={selectedOption}
                // onChange={this.handleChange}
                options={options}
                placeholder='Quiz style'
              />
            </div>
            <div className='more-actions'>
              <label>Upload Image</label>
              <input type='file' />
            </div>
          </fieldset>
        </form>
      </div>
      <div className='list-detail'> table</div>
    </div>
  );
};
export default ManageQuiz;
