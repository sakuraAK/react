import { useRef, useState } from "react";

export default function TimerChallengeComponent({ title, targetTime }) {

    const [timerStarted, updateTimerStarted] = useState(false);
    const [timerExpired, updateTimerExpired] = useState(false);

    const timeOutId = useRef();
    const initTime = useRef();
    
    function onTimerExpired() {
        updateTimerExpired(true);
        updateTimerStarted(false);
    }

    function onClickHandler() {
        if (!timerStarted) {
            updateTimerExpired(false);
            updateTimerStarted(true);
            timeOutId.current = setTimeout(onTimerExpired, targetTime * 1000);
            initTime.current = Date.now();
        }
        else {
            updateTimerStarted(false);
            clearTimeout(timeOutId.current);
            console.log(`Time left: ${targetTime - (Date.now() - initTime.current) / 1000}`);
        }
       
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                Target time: {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={onClickHandler}>
                    {timerStarted && !timerExpired ? "Stop Timer" : "Start Time"}
                </button>
            </p>

            <p className={timerStarted ? "active" : ""}>
                 {timerStarted && !timerExpired && "Time is running..."}
            </p>
        </section>

    );
}