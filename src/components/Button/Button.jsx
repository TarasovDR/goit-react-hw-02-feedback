import PropTypes from 'prop-types';
import { VoteButton } from './Button.styled';
// import {AiFillLike, AiFillDislike } from 'react-icons/ai';
// import {RiEmotionNormalLine} from 'react-icons/ri';

const Button = ({type, onClick, name, children}) =>{
  return(
    <VoteButton type={type} onClick={onClick} name={name}>
      {/* {name==='good' && <AiFillLike name="good" />}
      {name==='neutral' && <RiEmotionNormalLine name="neutral"/>}
      {name==='bad' && <AiFillDislike name="bad"/>} */}
      {children}</VoteButton>
  )
}

Button.propTypes={
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Button;