import { useState } from "react"
import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, handleDelete }) => {
    return (
        <Card reverse={false}>
            <FaTimes onClick={() => handleDelete(item.id)} />
            <h3>{item.rating}</h3>
            <p>{item.text}</p>
        </Card>
    )
}

export default FeedbackItem