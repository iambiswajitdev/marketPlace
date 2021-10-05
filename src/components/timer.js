import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Timer = ({ minute, second }) => {
  const dispatch = useDispatch();

  const initialMinute = minute;
  const initialSeconds = second;

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  if (minute === 0 && seconds === 0) {
    console.log("Counter end");
    dispatch({
      type: "COUNTER",
    });
  }

  return (
    <span>
      <span className="text-sm text-gray-500">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </span>
  );
};

export default Timer;
