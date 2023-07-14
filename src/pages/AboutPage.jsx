import { Link } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom"

const AboutPage = () => {
    const status = 404
    const navigate = useNavigate()
    if(status === 404) {
        return <Navigate to={'/notfound'} />
        // navigate('/notfound') can be done with this also
    }

    const handleClick = () => {
        console.log("Hello World")
        navigate('/posts')
    }

  return (
    <div>
        <p>About Page</p>
        <Link to={'/'}>Back to Home</Link>
        <utton onClick={handleClick}>Click Me</utton>
    </div>
  )
}

export default AboutPage