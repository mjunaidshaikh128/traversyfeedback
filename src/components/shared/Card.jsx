
const Card = ({children, reverse}) => {
  return (
    <div style={{border: "1px solid black", backgroundColor: reverse ? "black" : "white", color: reverse ? "white" : "black"}}>
        {children}
    </div>
  )
}

export default Card