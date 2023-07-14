import PropTypes from 'prop-types'

const Header = ({ text, bgColor, fontColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: fontColor
    }
    return (
        <div style={headerStyles}>{text}</div>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header