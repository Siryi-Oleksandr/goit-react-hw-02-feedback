import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: 'green' }}
        onClick={() => onLeaveFeedback()}
      >
        Good
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: '#07b8f4' }}
        onClick={() => onLeaveFeedback()}
      >
        Neutral
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: 'red' }}
        onClick={() => onLeaveFeedback()}
      >
        Bad
      </Button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  //   title: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
