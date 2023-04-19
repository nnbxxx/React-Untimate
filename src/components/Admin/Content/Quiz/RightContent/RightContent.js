import { useRef } from "react";
import CountDown from "./CountDown";

const RightContent = (props) => {
  const refDiv = useRef([]);

  const { dataquiz, handleSubmitQuiz } = props;
  const getClassQuestion = (question) => {
    if (question && question.answers.length > 0) {
      const isAnswered = question.answers.find((a) => a.isSelected === true);
      if (isAnswered) return "question selected";
    }
    return "question";
  };
  const onTimeUp = () => {
    handleSubmitQuiz();
  };
  const handleClickQuestion = (question, index) => {
    props.setIndex(index);
    if (refDiv.current) {
      refDiv.current.forEach((item) => {
        if (item && item.className === "question clicked") {
          item.className = "question";
        }
      });
    }
    if (question && question.answers.length > 0) {
      const isAnswered = question.answers.find((a) => a.isSelected === true);
      if (isAnswered) return;
    }
    refDiv.current[index].className = "question clicked";
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
              <div
                key={`question-f-${index}`}
                className={getClassQuestion(item)}
                onClick={() => {
                  handleClickQuestion(item, index);
                }}
                ref={(el) => (refDiv.current[index] = el)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default RightContent;
