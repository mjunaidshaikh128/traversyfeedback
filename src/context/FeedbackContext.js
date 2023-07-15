import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    useEffect(() => {
        fetchFeedback()
    }, [])

    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const fetchFeedback = async () => {
        const response = await fetch('/feedback')

        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
    }


    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)))
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
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext