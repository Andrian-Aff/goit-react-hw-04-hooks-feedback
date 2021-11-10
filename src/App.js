import {useState} from 'react';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';

export default function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0)

const handleFeedback = option => {

  switch (option) {
    case 'good':
      setGood(good => good + 1);
      break;

    case 'neutral':
      setNeutral(neutral => neutral+ 1);
      break;

    case 'bad':
      setBad(neutral => neutral + 1);
      break;

    default:
      return;
  }
};

const total = good + neutral + bad;
const positivePercentage = Math.round((100 * good) / (good + bad));

  return (
        <Section title='Please leave feedback'>
          <FeedbackOptions 
          options={['good', 'bad', 'neutral']} 
          onLeaveFeedback={handleFeedback} 
          />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) :
          (<Notification message="No feedback given" />)
        }
        </Section>
  );
}
