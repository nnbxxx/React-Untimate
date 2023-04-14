import _ from "lodash";
const Question = (props) => {
  const { data, index, handleCheckBox } = props;
  const handlehandleCheckBox = (e, id) => {
    console.log("🚀 ~ file: Question.js:4 ~ Question ~ data:", data);
    console.log("🚀 ~ file: Question.js:5 ~ handleCheckBox ~ id:", id);
    props.handleCheckBox();
  };
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className='question'>
        Question {index + 1}: {data.description} ?
      </div>
      {data.image ? (
        <div className='q-img'>
          <img src={`data:image/png;base64,${data.image}`} />
        </div>
      ) : (
        <div className='q-img'></div>
      )}

      <div className='answer'>
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((item, index) => {
            return (
              <div className='form-check a-child' key={`q-ans-cb-${index}`}>
                <input
                  key={`form-checbox-q-${index}`}
                  className='form-check-input'
                  type='checkbox'
                  onChange={(e) => {
                    handlehandleCheckBox(e, `q${data.questionId}a${item.id}`);
                  }}
                />
                <label className='form-check-label'>{item.description}</label>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Question;
