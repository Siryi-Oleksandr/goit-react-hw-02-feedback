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

  leaveFeedback = () => {
    console.log('😎');
    // this.state;
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
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </Container>
    );
  }
}

export default App;
