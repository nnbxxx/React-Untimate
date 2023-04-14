import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  const handleCheckBox = (e) => {};
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

      <div className='answer' key={`q-ans-${index}`}></div>
    </>
  );
};
export default Question;
