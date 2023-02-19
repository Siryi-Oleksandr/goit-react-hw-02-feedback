import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import { AiFillDislike, AiFillLike, AiFillDownCircle } from 'react-icons/ai';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      <Button
        type="button"
        style={{ backgroundColor: 'green' }}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
        <AiFillLike />
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: '#07b8f4' }}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
        <AiFillDownCircle />
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: 'red' }}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
        <AiFillDislike />
      </Button>
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  //   title: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
