import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsText, StatisticsTextList } from './Statistics.module';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <StatisticsTextList>
    <StatisticsText name="good">Good: {good}</StatisticsText>
    <StatisticsText name="neutral">Neutral:{neutral}</StatisticsText>
    <StatisticsText name="bad">Bad: {bad}</StatisticsText>
    <StatisticsText>
      Total:
      {total}
    </StatisticsText>
    <StatisticsText>
      Positive feedback:
      {positiveFeedback}%
    </StatisticsText>
  </StatisticsTextList>
);
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
export default Statistics;
