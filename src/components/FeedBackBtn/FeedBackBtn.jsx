import PropTypes from 'prop-types'

const FeedBackBtn = ({handlerClick}) => {
		return (
				<div className="">
					<button name='good' type='button' onClick={handlerClick}>
						Good
					</button>
					<button name='neutral' type='button' onClick={handlerClick}>
						Neutral
					</button>
					<button name='bad' type='button' onClick={handlerClick}>
						Bad
					</button>
				</div>
		)
	}
	FeedBackBtn.propTypes = {
		handlerClick: PropTypes.func.isRequired
	};
export { FeedBackBtn };







