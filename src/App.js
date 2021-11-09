import React, { Component } from 'react';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const goodAndBad = this.state.good + this.state.bad;
    return Math.round((100 * this.state.good) / goodAndBad);
    // return ((this.state.good / this.countTotalFeedback()) * 100) - Если учитывать нейтральные отзывы.
  }

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />

        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
