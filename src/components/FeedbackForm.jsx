import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"
import { useState } from "react"

const FeedbackForm = ({ handleadd }) => {
    const [text, setText] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)

    function handleTextChange(e) {
        setText(e.target.value);
        if (text === "") {
            setIsDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.length < 10) {
            setIsDisabled(true);
            setMessage("Text should not be less than 10 characters")
        } else {
            setIsDisabled(false)
            setMessage(null)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let newFeedback = {
            text,
            rating
        }
        handleadd(newFeedback)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect setRating={(rating) => setRating(rating)} />
                <input type="text"
                    onChange={handleTextChange}
                    value={text} />
                <Button type="submit" isDisabled={isDisabled} >Send</Button>
                {message && <p>{message}</p>}
            </form>
        </Card>
    )
}

export default FeedbackForm