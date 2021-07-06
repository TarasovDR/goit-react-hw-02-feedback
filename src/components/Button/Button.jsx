import PropTypes from 'prop-types';

const Button = ({type, onClick, name, children}) =>{
  return(
    <button type={type} onClick={onClick} name={name}>{children}</button>
  )
}

Button.propTypes={
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Button;