import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
// import PropTypes from 'prop-types';
import { Container } from './App.styled';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback" />
      </Container>
    );
  }
}

export default App;
