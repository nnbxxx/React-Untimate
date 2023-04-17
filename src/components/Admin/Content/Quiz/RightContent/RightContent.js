import CountDown from "./CountDown";

const RightContent = (props) => {
  const { dataquiz, handleSubmitQuiz } = props;
  const onTimeUp = () => {
    handleSubmitQuiz();
  };
  return (
    <>
      <div className='main-timer'>
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className='main-question'>
        {dataquiz &&
          dataquiz.length > 0 &&
          dataquiz.map((item, index) => {
            return (
              <div key={`question-f-${index}`} className='question'>
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default RightContent;
