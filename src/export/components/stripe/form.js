import React, { Fragment } from 'react'
import { injectStripe } from 'react-stripe-elements'
import CardNumber from './card-number'
import Expiration from './expiration'
import Cvc from './cvc'

class StripePayment extends React.Component {
	constructor(props) {
		super(props)
	}
	UNSAFE_componentWillReceiveProps({ stripe }) {
		if (stripe) {
			global.zygoteStripeInstance = stripe
		}
	}
	render() {
		return (
			<Fragment>
				<CardNumber />
				<div className='zygoteStripeRow'>
					<div>
						<Expiration />
					</div>
					<div>
						<Cvc />
					</div>
				</div>
			</Fragment>
		)
	}
}

export default injectStripe(StripePayment)