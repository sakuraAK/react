import { forwardRef, useImperativeHandle, useRef } from "react";





const ResultModal = forwardRef( function ResultModal({targetTime, remainingTime, onReset}, ref) {

    const dialog = useRef();


    const playerLost = remainingTime <= 0;
    const formattedRemainingTime  = remainingTime.toFixed(2);
    const score = Math.round((1 -  remainingTime/targetTime) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });


    return (
        <dialog ref={dialog} className="result-modal">
            {playerLost && <h2>You lost</h2>}
            {!playerLost && <h2>Your score: {score}</h2>}
            
            <p>
                The target time was <strong>{targetTime}</strong>
            </p>
            {!playerLost && 
            <p>
                You stopped timer with {formattedRemainingTime} seconds left
            </p>
            }
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    );
})


export default ResultModal;