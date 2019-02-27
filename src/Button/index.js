import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './styles'

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
