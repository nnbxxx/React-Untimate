import { useEffect, useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import _ from "lodash";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import Lightbox from "react-awesome-lightbox";
import {
  getAllQuizForAdmin,
  postCreateNewAnswerForQuiz,
  postCreateNewQuestionForQuiz,
} from "../../../../services/apiService";
import { toast } from "react-toastify";
const Questions = () => {
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: "",
      imageFile: "",
      imageName: "",
      answers: [{ id: uuidv4(), description: "", isCorrect: false }],
    },
  ]);
  const [previewImage, setPreviewImage] = useState(false);
  const [dataPreviewImage, setDataPreviewImage] = useState({
    title: "",
    url: "",
  });
  const [listQuiz, setListQuiz] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      let newListQuiz = res.DT.map((item) => {
        return { value: item.id, label: `${item.id}-${item.description}` };
      });
      setListQuiz(newListQuiz);
      // toast.success(res.EM);
    } else {
      toast.error(res.EM);
    }
  };
  const handAddRemoveQuestion = (type, id) => {
    if (type) {
      const newQuestion = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        answers: [{ id: uuidv4(), description: "", isCorrect: false }],
      };
      setQuestions([...questions, newQuestion]);
    }
    if (!type) {
      let questionsClone = _.cloneDeep(questions);
      questionsClone = questions.filter((item) => item.id !== id);
      setQuestions(questionsClone);
    }
  };
  const handAddRemoveAnswer = (type, questionId, answerId) => {
    let questionsClone = _.cloneDeep(questions);
    if (type) {
      const newAnswer = { id: uuidv4(), description: "", isCorrect: false };
      let index = questionsClone.findIndex((item) => {
        return item.id === questionId;
      });
      questionsClone[index].answers.push(newAnswer);
      setQuestions(questionsClone);
    }
    if (!type) {
      let index = questionsClone.findIndex((item) => {
        return item.id === questionId;
      });
      questionsClone[index].answers = questionsClone[index].answers.filter(
        (item) => item.id !== answerId
      );
      setQuestions(questionsClone);
    }
  };
  const handleOnChange = (type, id, value) => {
    if (type === "QUESTION") {
      let questionsClone = _.cloneDeep(questions);
      let index = questionsClone.findIndex((item) => {
        return item.id === id;
      });
      if (index > -1) questionsClone[index].description = value;
      setQuestions(questionsClone);
    }
  };
  const handleOnChangeFile = (questionId, e) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => {
      return item.id === questionId;
    });
    if (index > -1 && e.target && e.target.files && e.target.files[0]) {
      questionsClone[index].imageFile = e.target.files[0];
      questionsClone[index].imageName = e.target.files[0].name;
    }
    setQuestions(questionsClone);
  };
  const handleOnChangeAnswer = (type, answerId, questionId, value) => {
    let questionsClone = _.cloneDeep(questions);

    let index = questionsClone.findIndex((item) => {
      return item.id === questionId;
    });
    if (index > -1) {
      questionsClone[index].answers = questionsClone[index].answers.map(
        (answer) => {
          if (answer.id === answerId) {
            if (type === "CHECKBOX") answer.isCorrect = value;
            if (type === "INPUT") answer.description = value;
          }
          return answer;
        }
      );
    }

    setQuestions(questionsClone);
  };
  const handleSubmitQuestionForQuiz = async () => {
    // alert("me");
    //submit questions

    let resQuestions = await Promise.all(
      questions.map(async (question) => {
        const q = await postCreateNewQuestionForQuiz(
          +selectedQuiz.value,
          question.description,
          question.imageFile
        );
        await Promise.all(
          question.answers.map(async (answer) => {
            await postCreateNewAnswerForQuiz(
              q.DT.id,
              answer.description,
              answer.isCorrect
            );
          })
        );
      })
    );

    //submit answers
  };
  return (
    <div className='questions-container'>
      <div className='title'> Manage Questions</div>
      <hr />
      <div className='add-new-question'>
        <div className='col-6 form-group'>
          <label className='mb-2'>Select Quiz</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={listQuiz}
          />
        </div>
        <span className='mt-3 mb-2'>Add Questions: </span>
        {questions &&
          questions.length > 0 &&
          questions.map((question, index) => {
            return (
              <div key={question.id} className='q-main mb-4'>
                <div className='mt-3 questions-content'>
                  <div className='form-floating description'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Question'
                      value={question.description}
                      onChange={(e) => {
                        handleOnChange("QUESTION", question.id, e.target.value);
                      }}
                    />
                    <label>Question {index + 1}'s Description</label>
                  </div>
                  <div className='group-upload'>
                    <label htmlFor={`${question.id}`}>
                      <RiImageAddFill className='label-upload' />
                    </label>{" "}
                    <input
                      id={`${question.id}`}
                      type='file'
                      hidden
                      onChange={(e) => {
                        handleOnChangeFile(question.id, e);
                      }}
                    />
                    <span>
                      {question.imageName ? (
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setPreviewImage(true);
                            setDataPreviewImage({
                              title: question.imageName,
                              url: question.imageFile,
                            });
                          }}
                        >
                          {question.imageName}
                        </span>
                      ) : (
                        `0 file is uploaded`
                      )}
                    </span>
                  </div>
                  <div className='btn-add'>
                    <span
                      onClick={() => {
                        handAddRemoveQuestion(true, "");
                      }}
                    >
                      <BsFillPatchPlusFill className='icon-add' />
                    </span>
                    {questions.length > 1 && (
                      <span
                        onClick={() => {
                          handAddRemoveQuestion(false, question.id);
                        }}
                      >
                        <BsFillPatchMinusFill className='icon-remove' />
                      </span>
                    )}
                  </div>
                </div>
                {question.answers &&
                  question.answers.length > 0 &&
                  question.answers.map((answer, index) => {
                    return (
                      <div key={answer.id} className='mt-3 answers-content'>
                        <input
                          type='checkbox'
                          className='form-check-input iscorrect'
                          value={answer.isCorrect}
                          onChange={(e) => {
                            handleOnChangeAnswer(
                              "CHECKBOX",
                              answer.id,
                              question.id,
                              e.target.checked
                            );
                          }}
                        />
                        <div className='form-floating answer-name'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='answer-name'
                            value={answer.description}
                            onChange={(e) => {
                              handleOnChangeAnswer(
                                "INPUT",
                                answer.id,
                                question.id,
                                e.target.value
                              );
                            }}
                          />
                          <label>Answers {index + 1}</label>
                        </div>
                        <div className='btn-group'>
                          <span
                            onClick={() => {
                              handAddRemoveAnswer(true, question.id);
                            }}
                          >
                            <AiOutlinePlusCircle className='icon-add' />
                          </span>
                          {question.answers.length > 1 && (
                            <span
                              onClick={() => {
                                handAddRemoveAnswer(
                                  false,
                                  question.id,
                                  answer.id
                                );
                              }}
                            >
                              <AiOutlineMinusCircle className='icon-remove' />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      {questions && questions.length > 0 && (
        <div>
          <button
            className='btn btn-primary'
            onClick={(e) => {
              handleSubmitQuestionForQuiz();
            }}
          >
            {" "}
            Save Change
          </button>
        </div>
      )}
      {previewImage && (
        <Lightbox
          image={URL.createObjectURL(dataPreviewImage.url)}
          title={dataPreviewImage.title}
          onClose={() => {
            setPreviewImage(false);
          }}
        ></Lightbox>
      )}
    </div>
  );
};
export default Questions;
