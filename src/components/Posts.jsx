import { useParams } from "react-router-dom"

const Posts = () => {
    const params = useParams()

    return (
        <div>
            <p>Post</p>
            <p>Post ID: {params.id}</p>
        </div>
    )
}

export default Posts