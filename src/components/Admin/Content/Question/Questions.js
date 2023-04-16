import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import _ from "lodash";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: "",
      imageFile: "",
      imageName: "",
      anwers: [{ id: uuidv4(), description: "", isCorrect: false }],
    },
  ]);

  const handAddRemoveQuestion = (type, id) => {
    if (type) {
      const newQuestion = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        anwers: [{ id: uuidv4(), description: "", isCorrect: false }],
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
      questionsClone[index].anwers.push(newAnswer);
      setQuestions(questionsClone);
    }
    if (!type) {
      let index = questionsClone.findIndex((item) => {
        return item.id === questionId;
      });
      questionsClone[index].anwers = questionsClone[index].anwers.filter(
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
      questionsClone[index].anwers = questionsClone[index].anwers.map(
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
  const handleSubmitQuestionForQuiz = () => {
    alert("me");
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
            options={options}
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
                      {question.imageName
                        ? question.imageName
                        : `0 file is uploaded`}
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
                {question.anwers &&
                  question.anwers.length > 0 &&
                  question.anwers.map((answer, index) => {
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
                          {question.anwers.length > 1 && (
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
    </div>
  );
};
export default Questions;
