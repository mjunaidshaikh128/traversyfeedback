import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from "react"

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext)

    return (
        feedback.map(item => (
            <FeedbackItem item={item} key={item.id} />
        ))
    )
}

export default FeedbackList