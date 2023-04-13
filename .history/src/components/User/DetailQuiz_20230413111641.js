import { useParams } from "react-router-dom";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  return <div className='detail-quiz-container'>DetailQuiz</div>;
};
export default DetailQuiz;
