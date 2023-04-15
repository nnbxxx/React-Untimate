import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";
const ListQuiz = (props) => {
  const [arrQuiz, setArrQuiz] = useState([]);
  useEffect(() => {
    getQuizData();
  }, []);
  const getQuizData = async () => {
    const res = await getQuizByUser();
    "🚀 ~ file: ListQuiz.js:9 ~ getQuizData ~ res:", res;
    if (res && res.EC == 0) {
      setArrQuiz(res.DT);
    }
  };
  return (
    <div className='list-quiz-container container'>
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((item, index) => {
          return (
            <div
              key={`index-quiz-${index}`}
              className='card'
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/png;base64,${item.image}`}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Quiz {index + 1}</h5>
                <p className='card-text'>{item.description}</p>
                <button className='btn btn-primary'>Start Now</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ListQuiz;
