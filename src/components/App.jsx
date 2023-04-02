import { useState } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

const App = () => {
  const [form, setForm] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const countTotalFeedback = () => {
    return form.good + form.neutral + form.bad;
  };
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    return Math.round((form.good / countTotalFeedback()) * 100);
  };
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const handleClick = e => {
    const { name } = e.target;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: prevForm[name] + 1,
      };
    });
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
              good={form.good}
              neutral={form.neutral}
              bad={form.bad}
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
