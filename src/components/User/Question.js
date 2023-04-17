import _ from "lodash";
import Lightbox from "react-awesome-lightbox";
import { useState } from "react";

const Question = (props) => {
  const { data, index, handleCheckBox } = props;
  const [previewImage, setPreviewImage] = useState(false);
  const handlehandleCheckBox = (e, aid, qid) => {
    props.handleCheckBox(aid, qid);
  };
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className='question'>
        Question {index + 1}: {data.description} ?
      </div>
      {data.image ? (
        <div className='q-img'>
          <img
            style={{ cursor: "pointer" }}
            src={`data:image/png;base64,${data.image}`}
            onClick={() => {
              setPreviewImage(true);
            }}
          />
          {previewImage && (
            <Lightbox
              image={`data:image/png;base64,${data.image}`}
              title={`Questions Image`}
              onClose={() => {
                setPreviewImage(false);
              }}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className='q-img'></div>
      )}

      <div className='answer'>
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((item, index) => {
            return (
              <div className='form-check a-child' key={`q-ans-cb-${index}`}>
                <input
                  key={`form-checbox-q-${index}`}
                  className='form-check-input'
                  type='checkbox'
                  checked={item.isSelected}
                  onChange={(e) => {
                    handlehandleCheckBox(e, item.id, data.questionId);
                  }}
                />
                <label className='form-check-label'>{item.description}</label>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Question;
