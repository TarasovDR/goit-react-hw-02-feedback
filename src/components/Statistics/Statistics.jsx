import PropTypes from 'prop-types';
import { MarkList, MarkItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return(
    <>
    <MarkList>
      <MarkItem>Good: {good}</MarkItem>
      <MarkItem>Neutral: {neutral}</MarkItem>
      <MarkItem>Bad: {bad}</MarkItem>
    </MarkList>
    <MarkList>
      <MarkItem>Total: {total}</MarkItem>
      <MarkItem>Positive feedback: {good && positivePercentage} %</MarkItem>
    </MarkList>
    </>
  );
};

Statistics.propTypes={
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics;