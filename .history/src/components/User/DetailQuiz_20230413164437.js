import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      console.log("🚀 ~ file: DetailQuiz.js:13 ~ fetchQuestions ~ raw:", raw);
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let arr = [];
          let description = "";
          data.forEach((item, index) => {});
          return { questionId: key, data: value };
        })
        .value();
      console.log("🚀 ~ file: DetailQuiz.js:15 ~ fetchQuestions ~ data:", data);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return <div className='detail-quiz-container'>DetailQuiz</div>;
};
export default DetailQuiz;
