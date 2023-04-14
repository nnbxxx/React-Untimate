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
        <div className='a-child'>A. abcdefeg</div>
        <div className='b-child'>B. abcdefeg</div>
        <div className='c-child'>C. abcdefeg</div>
        <div className='d-child'>D. abcdefeg</div>
      </div>
    </>
  );
};
export default Question;
