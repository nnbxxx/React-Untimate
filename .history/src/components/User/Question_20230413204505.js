import _ from "loadash";
const Question = (props) => {
  const { data } = props;
  if (_.isEmpty())
    return (
      <>
        <div className='question'>Question 1: how are you doing ?</div>
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
