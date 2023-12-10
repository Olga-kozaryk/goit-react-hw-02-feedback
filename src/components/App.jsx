import { Component } from "react";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Section } from "./Section/Section";







 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
  return (
    <div  style={{
      margin: '50px auto',
      padding: '25px',
      width: '400px',
      border: '1px solid #AE6A2E',
      borderRadius: '15px',
      backgroundColor: '#FFEC8A'
    }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
}

export default App;