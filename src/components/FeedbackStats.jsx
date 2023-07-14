
const FeedbackStats = ({ feedback }) => {
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length;

    average = average.toFixed(1)



    return (
        <div>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    )
}

export default FeedbackStats