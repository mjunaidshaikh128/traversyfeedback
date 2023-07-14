import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: "This is Feedback item 1"
        },
        {
            id: 2,
            rating: 9,
            text: "This is Feedback item 2"
        },
        {
            id: 3,
            rating: 8,
            text: "This is Feedback item 3"
        },
    ])

    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    function handleDelete(id) {
        console.log(`app ${id}`);
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    function addFeedback(newFeedback) {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
        console.log(newFeedback);
    }

    function updateFeedback(id,updItem) {
        console.log(id, updItem);
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
    }

    function editFeedback(item) {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    return (

        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            handleDelete,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext