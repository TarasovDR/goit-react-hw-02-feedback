import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

class App extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0,
  };

  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  handleClick = e => {
    const btnName = e.target.name;
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalArrValues = Object.values(this.state);
    return totalArrValues.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const isFeedback = good || neutral || bad;
    return (
      <>
        <Section text="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section text="Statistics">
          {isFeedback ? (
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
      </>
    );
  }
}

export default App;
