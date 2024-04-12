import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallengeComponent({ title, targetTime }) {


    const [remainingTime, updateRemaingTime] = useState(targetTime * 1000);

    const timeOutId = useRef();
    const dialog = useRef();
 

    if (remainingTime <= 0) {
        clearInterval(timeOutId.current);
        dialog.current.open()
    }

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;


    function handleStart() {
        timeOutId.current = setInterval(()=>{
            updateRemaingTime((prevRemTime) => prevRemTime - 10)
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timeOutId.current);
    }

    function onResetHandler()
    {
        updateRemaingTime(targetTime * 1000);
    }

    return (
        <>
        <ResultModal ref={dialog}  targetTime={targetTime} remainingTime={remainingTime/1000} onReset={onResetHandler}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                Target time: {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={ timerIsActive ? handleStop : handleStart }>
                    {timerIsActive ? "Stop Timer" : "Start Time"}
                </button>
            </p>

            <p className={timerIsActive ? "active" : ""}>
                 {timerIsActive && "Time is running..."}
            </p>
        </section>
        </>
    );
}