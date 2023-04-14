import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className='question'>
        Question {index + 1}: {data.description} ?
      </div>
      <div className='q-img'>
        <img src={`data:image/png;base64,${data.image}`} />
      </div>
      <div className='answer'>
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((item, index) => {
            return (
              <>
                <div key={`answer-${index}`} className='form-check a-child'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                  />
                  <label className='form-check-label'>{item.description}</label>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Question;
