import React from 'react'
import { CardNumberElement } from 'react-stripe-elements'
import Input from './input'

export default class StripeCardNumber extends React.Component {
	render() {
		return (
			<Input
				label='Card Number'
			>
				{({
					handleChange,
					handleFocus,
					handleBlur,
				}) => (
					<CardNumberElement
						placeholder=''
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						classes={{ base: `zygoteStripeInput` }}
					/>
				)}
			</Input>
		)
	}
}