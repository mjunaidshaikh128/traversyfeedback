import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, handleDelete }) => {
    return (
        feedback.map(item => (
            <FeedbackItem item={item} handleDelete={handleDelete} key={item.id} />
        ))
    )
}

export default FeedbackList