import "./ManageQuiz.scss";
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
              <input type='text' className='form-control' />
              <label>Name</label>
            </div>
            <div className='form-floating'>
              <input type='text' className='form-control' />
              <label>Description</label>
            </div>
            <input type='submit' value='Submit' />
          </fieldset>
        </form>
      </div>
      <div className='list-detail'> table</div>
    </div>
  );
};
export default ManageQuiz;
