import { type } from '@testing-library/user-event/dist/type'
import PropTypes from 'prop-types'

const Button = ({ children, type, isDisabled }) => {
    return (
        <button type={type} disabled={isDisabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: "button",
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}

export default Button