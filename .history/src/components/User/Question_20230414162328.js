import _ from "lodash";
const Question = (props) => {
  const { data, index, handleCheckBox } = props;
  const handlehandleCheckBox = (e, aid, qid) => {
    props.handleCheckBox(aid, qid);
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
            console.log("🚀 ~ file: Question.js:27 ~ Question ~ item:", item);
            return (
              <div className='form-check a-child' key={`q-ans-cb-${index}`}>
                <input
                  key={`form-checbox-q-${index}`}
                  className='form-check-input'
                  type='checkbox'
                  checked={item.isSelected}
                  onChange={(e) => {
                    handlehandleCheckBox(e, item.id, data.questionId);
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
