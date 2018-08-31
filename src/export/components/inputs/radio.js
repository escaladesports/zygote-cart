import React from 'react'

export default class Radio extends React.Component {
	render() {
		const {
			name,
			value,
			checked,
			onChange,
		} = this.props
		return (
			<div className={`zygoteRadio${checked ? ` zygoteRadioChecked` : ``}`}>
				<input
					type='radio'
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
				/>
				{checked && (
					<div className='zygoteRadioIcon'>✓</div>
				)}
			</div>
		)
	}
	static styles = () => ({
		'.zygoteCheckbox, .zygoteRadio': {
			width: 20,
			height: 20,
			border: `1px solid #666`,
			position: `relative`,
			display: `inline-block`,
			input: {
				display: `none`,
			},
		},
		'.zygoteCheckboxChecked, .zygoteRadioChecked': {
			background: `#666`,
		},
		'.zygoteCheckboxIcon, .zygoteRadioIcon': {
			color: `#fff`,
			position: `absolute`,
			left: `50%`,
			top: `50%`,
			transform: `translate(-50%, -50%)`,
		},
	})
}