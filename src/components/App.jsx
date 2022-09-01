import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { useState } from 'react';
import Section from './Section';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const countTotalFeedbacks = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    (good / countTotalFeedbacks) * 100 || 0;

  const onClickButtonHandler = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error(`Unknown feedback type - ${type}`);
    }
  };

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClickButtonHandler={onClickButtonHandler}
        />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedbacks ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            value={{
              good,
              neutral,
              bad,
              total: countTotalFeedbacks,
              positivePercentage: countPositiveFeedbackPercentage,
            }}
          />
        )}
      </Section>

      <GlobalStyle />
    </Box>
  );
};
