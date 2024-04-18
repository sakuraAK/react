export default function Review({feedback}) {
    return (
        <div>
            <p>{feedback.userFeedbackText}</p>
            <a>{feedback.userName}</a>
        </div>
    );
}