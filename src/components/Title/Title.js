import PropTypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ text }) => {
  return <h2 className={s.title}>{text}</h2>;
};

Title.defaultProps = {
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
