
const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
	return (
		<div>
			<ul>
				<li className="">
					<p>Good: {good}</p>
				</li>
				<li className="">
					<p>Neutral: {neutral}</p>
				</li>
				<li className="">
					<p>Bad: {bad}</p>
				</li>
				<li className="">
					<p>Total: {countTotalFeedback()}</p>
				</li>
				<li className="">
					<p>Positive feedback: {countPositiveFeedbackPercentage()} %</p>
				</li>
			</ul>
		</div>
	)
}
export { Statistics };