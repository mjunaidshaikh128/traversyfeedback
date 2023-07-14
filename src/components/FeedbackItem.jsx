import { useState } from "react"
import Card from "./shared/Card"
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
    return (
        <Card reverse={false}>  
            <FaTimes onClick={() => deleteFeedback(item.id)} />
            <FaEdit onClick={() => editFeedback(item)} />
            <h3>{item.rating}</h3>
            <p>{item.text}</p>
        </Card>
    )
}

export default FeedbackItem