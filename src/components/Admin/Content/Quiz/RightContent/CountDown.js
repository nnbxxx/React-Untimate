import { useState, useEffect } from "react";

const CountDown = (props) => {
  const [count, setCount] = useState(300);
  const { onTimeUp } = props;
  const toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;
    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };
  useEffect(() => {
    if (count === 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div className='countdown-container'>{toHHMMSS(count)}</div>;
};
export default CountDown;
