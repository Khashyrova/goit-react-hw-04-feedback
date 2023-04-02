import { useState } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  return (
    <div>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={handleClick} />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    </div>
  );
};
export default App;
