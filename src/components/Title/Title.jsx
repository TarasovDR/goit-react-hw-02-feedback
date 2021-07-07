import PropTypes from 'prop-types';
import { SectionTitle } from './Title.styled';

const Title = ({ text }) => {
  return <SectionTitle>{text}</SectionTitle>;
};

Title.defaultProps = {
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
