import PropTypes from 'prop-types'

const FeedBackBtn = ({handlerClick, state}) => {
	const keyState = Object.keys(state);
		return (
				<div className="">
					{keyState.map((item) => {
						return 	<button className="" name={item} type='button' onClick={handlerClick}>
											{item}
										</button>
					})}
					{/* <button name='good' type='button' onClick={handlerClick}>
						Good
					</button>
					<button name='neutral' type='button' onClick={handlerClick}>
						Neutral
					</button>
					<button name='bad' type='button' onClick={handlerClick}>
						Bad
					</button> */}
				</div>
		)
	}
	FeedBackBtn.propTypes = {
		handlerClick: PropTypes.func.isRequired
	};
export { FeedBackBtn };







