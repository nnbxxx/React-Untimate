const RightContent = (props) => {
  const { dataquiz } = props;
  return (
    <>
      <div className='main-timer'>10:00</div>
      <div className='main-question'>
        {dataquiz &&
          dataquiz.length > 0 &&
          dataquiz.map((item, index) => {
            return <div className='question'>{index + 1}</div>;
          })}
      </div>
    </>
  );
};
export default RightContent;
