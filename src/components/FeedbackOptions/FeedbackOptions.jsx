import PropTypes from 'prop-types';
import Button from 'components/Button';

const FeedbackOptions = ({options, onLeaveFeedback})=>{
  return(
    <>
    {options.map(option =>{
      return (
      <Button
        key={option}
        type="button"
        onClick={onLeaveFeedback}
        name={option}
      >
        {option}
        </Button>
    )})      
    }
    </>
  );
}

FeedbackOptions.propTypes={
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;