import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
// import PropTypes from 'prop-types';
import { Container } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    const result = (positiveFeedback / total) * 100;
    return total ? result.toFixed(1) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
