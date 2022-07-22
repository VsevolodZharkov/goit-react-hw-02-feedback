import PropTypes from 'prop-types'

const FeedBackBtn = ({handlerClick}) => {
		return (
				<div className="">
					<button className="" name='good' type='button' onClick={handlerClick}>
						Good
					</button>
					<button className="" name='neutral' type='button' onClick={handlerClick}>
						Neutral
					</button>
					<button className="" name='bad' type='button' onClick={handlerClick}>
						Bad
					</button>
				</div>
		)
	}
	FeedBackBtn.propTypes = {
		handlerClick: PropTypes.func.isRequired
	};
export { FeedBackBtn };







