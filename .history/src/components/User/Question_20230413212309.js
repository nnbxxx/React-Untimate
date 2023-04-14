import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className='q-img'>
        <img src={`data:image/png;base64,${data.image}`} />
      </div>
      <div className='question'>
        Question {index + 1}: {data.description} ?
      </div>
      <div className='answer'>
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((item, index) => {
            return <div className='a-child'>A. abcdefeg</div>;
          })}
      </div>
    </>
  );
};
export default Question;
