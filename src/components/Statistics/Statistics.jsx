import PropTypes from 'prop-types';
import { StatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
    </div>
  );
};

Statistics.propTypes = {
  //   title: PropTypes.string,
  //   onLeaveFeedback: PropTypes.func,
};

export default Statistics;
