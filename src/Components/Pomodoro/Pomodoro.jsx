import React, { useState, useEffect } from "react";
import { useTheme } from "../../Context/Theme-Context";
import { useTimer } from "react-timer-hook";
import "./Pomodoro.css";


export const DisplayTimer = ({
  expiryTimestamp,
  setTimeSelectorVisible,
  timeSelectorVisible,
  type,
  focusMinutes,
  restMinutes,
  setType,
  setFocusMinutes,
  setRestMinutes
}) => {
  const { themeObject } = useTheme();
  const { seconds, minutes,hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });
  useEffect(pause, []);
  return (
    <>
      <div className="type flex justify-center ">
        <div
          className="focus h-32 w-32 bg-gray-900 mr-8 rounded-xl flex flex-col justify-center items-center font-bold text-2xl text-orange-500 cursor-pointer"
          style={{ backgroundColor: themeObject.secondary }}
          onClick={() => {
            setType("focus");const time = new Date();
            time.setSeconds(
              time.getSeconds() + focusMinutes * 60 
            );
            restart(time);
            pause();
          }}
        >
          <span className="text-6xl">🎯</span> Focus
        </div>
        <div
          className="relax h-32 w-32 bg-gray-900 rounded-xl flex flex-col justify-center items-center font-bold text-2xl text-cyan-500 cursor-pointer"
          style={{ backgroundColor: themeObject.secondary }}
          onClick={() => {
            setType("rest");
            const time = new Date();
            time.setSeconds(
              time.getSeconds() + restMinutes * 60
            );
            restart(time);
            pause();
          }}
        >
          <span className="text-6xl">✨</span> Rest
        </div>
      </div>
      <div
        className={`timer h-72 w-72 rounded-full  flex justify-center items-center font-bold text-3xl mt-8 border-2 ${
          type === "focus" ? "border-orange-500" : "border-cyan-500"
        }`}
        style={{ color: themeObject.text }}
      >
        <div className="time ">
          {hours===0?"00":hours} : {minutes===0?"00":minutes} : {seconds===0?"00":seconds}
        </div>
      </div>
      <div className="pomodoro__actions flex mt-8 items-center mb-8">
        
        <div
          className="start h-16 w-16 mr-6 rounded-xl flex text-xl justify-center items-center cursor-pointer"
          style={{ backgroundColor: themeObject.secondary }}
          onClick={pause}
        >
          <span
            className="material-symbols-outlined "
            style={{ color: themeObject.text }}
          >
            pause
          </span>
        </div>
        <div
          className="start h-16 w-16 mr-6 rounded-xl flex text-xl justify-center items-center cursor-pointer"
          style={{ backgroundColor: themeObject.secondary }}
          onClick={resume}
        >
          <span
            className="material-symbols-outlined "
            style={{ color: themeObject.text }}
          >
            play_arrow
          </span>
        </div>
        <div
          className="reset h-16 w-16 mr-6 rounded-xl flex text-xl justify-center items-center cursor-pointer"
          style={{ backgroundColor: themeObject.secondary }}
          onClick={() => {
            const time = new Date();
            time.setSeconds(
              time.getSeconds() +
                (type === "focus" ? focusMinutes * 60 : restMinutes * 60)
            );
            restart(time);
            pause();
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: themeObject.text }}
          >
            restart_alt
          </span>
        </div>
        <div
          className="settings h-16 w-16 rounded-xl flex text-xl justify-center items-center cursor-pointer"
          style={{ backgroundColor: themeObject.secondary }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: themeObject.text }}
            onMouseOver={() => setTimeSelectorVisible(!timeSelectorVisible)}
          >
            settings
          </span>
        </div>
      </div>
      {timeSelectorVisible ? (
        <div
          className="choose-time flex  p-4 rounded-xl"
          style={{ backgroundColor: themeObject.secondary }}
          onMouseLeave={() => setTimeSelectorVisible(!timeSelectorVisible)}
        >
          <div className="choose-min  justify-centeritems-center mr-4">
            <div className="heading font-bold ">Focus</div>
            <div
              className="time h-8 w-8 mb-2 text-cyan-500 hover:text-gray-500 cursor-pointer font-bold flex justify-center items-center "
              onClick={() => {
                setType("focus");
                setFocusMinutes(25);
                const time = new Date();
                time.setSeconds(time.getSeconds() + 25 * 60);
                restart(time);
                pause();
              }}
            >
              25
            </div>
            <div
              className="time h-8 w-8 mb-2 text-cyan-500 hover:text-gray-500 cursor-pointer font-bold flex justify-center items-center"
              onClick={() => {
                setType("focus");
                setFocusMinutes(60);
                const time = new Date();
                time.setSeconds(time.getSeconds() + 60 * 60);
                restart(time);
                pause();
              }}
            >
              60
            </div>
            <div
              className="time h-8 w-8 mb-2 text-cyan-500 hover:text-gray-500 cursor-pointer font-bold flex justify-center items-center"
              onClick={() => {
                setType("focus");
                setFocusMinutes(120);
                const time = new Date();
                time.setSeconds(time.getSeconds() + 120 * 60);
                restart(time);
                pause();
              }}
            >
              120
            </div>
          </div>
          <div className="choose-min  justify-center items-center">
            <div className="heading font-bold ">Rest</div>
            <div
              className="time h-8 w-8 mb-2 text-cyan-500 hover:text-gray-500 cursor-pointer font-bold flex justify-center items-center "
              onClick={() => {
                setType("rest");
                setRestMinutes(5);
                const time = new Date();
                time.setSeconds(time.getSeconds() + 5 * 60);
                restart(time);
                pause();
              }}
            >
              5
            </div>
            <div
              className="time h-8 w-8 mb-2 text-cyan-500 hover:text-gray-500 cursor-pointer font-bold flex justify-center items-center"
              onClick={() => {
                setType("rest");
                setRestMinutes(15);
                const time = new Date();
                time.setSeconds(time.getSeconds() + 15 * 60);
                restart(time);
                pause();
              }}
            >
              15
            </div>
            <div
              className="time h-8 w-8 mb-2 text-cyan-500 hover:text-gray-500 cursor-pointer font-bold flex justify-center items-center"
              onClick={() => {
                setType("rest");
                setRestMinutes(25);
                const time = new Date();
                time.setSeconds(time.getSeconds() + 25 * 60);
                restart(time);
                pause();
              }}
            >
              25
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
const Pomodoro = () => {
  const { themeObject } = useTheme();
  const [type, setType] = useState("focus");
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [restMinutes, setRestMinutes] = useState(5);
  const [timeSelectorVisible, setTimeSelectorVisible] = useState(false);
  let timer = new Date();
  timer.setSeconds(timer.getSeconds() +( type === "focus" ? (focusMinutes * 60) : (restMinutes * 60)));
 
 
  return (
    <div
      className="pomodoro__container  flex flex-col items-center justify-center relative "
      style={{ backgroundColor: themeObject.primary }}
    >
      <DisplayTimer
        expiryTimestamp={timer}
        setTimeSelectorVisible={setTimeSelectorVisible}
        timeSelectorVisible={timeSelectorVisible}
        type={type}
        focusMinutes={focusMinutes}
        restMinutes={restMinutes}
        setType={setType}
        setFocusMinutes={setFocusMinutes}
        setRestMinutes={setRestMinutes}
      />
    </div>
  );
};

export default Pomodoro;
