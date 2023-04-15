const ManageQuiz = () => {
  return (
    <div className='quiz-container'>
      <div className='title'>Manage Quizes</div>
      <div className='add-new'>
        <div className='form-floating mb-3'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <form action='/action_page.php'>
          <fieldset className='border rounded-3 p-3'>
            <legend className='float-none w-auto px-3'>Personalia:</legend>
            <label htmlFor='fname'>First name:</label>
            <input type='text' id='fname' name='fname' />
            <br />
            <label htmlFor='lname'>Last name:</label>
            <input type='text' id='lname' name='lname' />
            <br />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' />
            <br />
            <label htmlFor='birthday'>Birthday:</label>
            <input type='date' id='birthday' name='birthday' />
            <br />
            <input type='submit' value='Submit' />
          </fieldset>
        </form>
      </div>
      <div className='list-detail'> table</div>
    </div>
  );
};
export default ManageQuiz;
