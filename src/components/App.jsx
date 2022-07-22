import { Component, Fragment } from 'react'
import { Section } from './Section/Section'
import { FeedBackBtn } from './FeedBackBtn/FeedBackBtn'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'
import PropTypes from 'prop-types'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = ({ target: { name } }) => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.ceil((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
		let sum = good + neutral + bad;
		console.log(sum);
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedBackBtn handlerClick={this.handlerClick} />
        </Section>
        <Section title="Statistics">
					{sum === 0 ? 
					(<Notification message="There is no feedback" />) : 
					(<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />)
					} 
        </Section>
      </Fragment>
    );
  }
}
App.propTypes = {
	state: PropTypes.shape({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired
	})
};