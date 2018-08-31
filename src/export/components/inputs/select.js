import React from 'react'
import registerInput from '../../utils/register-input'
import unregisterInput from '../../utils/unregister-input'

export default class Select extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: ``,
			focus: false,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
		this.validate = this.validate.bind(this)
	}
	handleChange(e){
		if(this.props.handleChange){
			this.props.handleChange(e)
		}
		this.setState({ value: e.target.value })
	}
	handleFocus() {
		this.setState({ focus: true })
	}
	validate(){
		this.setState({ focus: false })
		const { value } = this.select

		// Required message
		if (this.props.required && !value){
			return this.setState({ error: `This field is required` })
		}

		// Run validation functions
		const { validators } = this.props
		if (validators) {
			for (let i = 0; i < validators.length; i++) {
				const error = validators[i](value)
				if (error) {
					return this.setState({ error })
				}
			}
		}

		this.setState({ error: false })
	}
	componentDidMount() {
		registerInput(this)
	}
	componentWillUnmount() {
		unregisterInput(this)
	}
	render(){
		const {
			value,
			focus,
			error,
		} = this.state
		const {
			label,
			type,
			autoComplete,
			children,
			inputRef,
			name,
		} = this.props
		return (
			<label className={`zygoteSelectWrapper${error ? ` zygoteSelectErr` : ``}${focus ? ` zygoteSelectFocus` : ``}`}>
				<span
					className={`zygoteSelectLabel${(value || focus) ? ` zygoteSelectLabelMoved` : ``}`}
				>
					{label}
				</span>
				<select
					type={type || `text`}
					autoComplete={autoComplete}
					ref={el => {
						this.select = el
						if(inputRef) inputRef(el)
					}}
					value={value}
					onChange={this.handleChange}
					onFocus={this.handleFocus}
					onBlur={this.validate}
					className='zygoteSelect'
					name={name}
				>
					<option disabled value='' />
					{children}
				</select>
				{error && (
					<span className='zygoteSelectErrMsg' data-error>{error}</span>
				)}
			</label>
		)
	}
	static styles = {
		'.zygoteSelectWrapper': {
			position: `relative`,
			display: `block`,
			marginTop: 30,
			fontSize: `.9em`,
			background: `#F8F8F8`,
			border: `1px solid #EFF0F0`,
			borderRadius: 4,
		},
		'.zygoteSelect': {
			background: `transparent`,
			height: 36,
			position: `relative`,
			zIndex: 2,
			display: `block`,
			width: `100%`,
			fontSize: `.9em`,
			border: 0,
			outline: `none`,
		},
		'.zygoteSelectFocus': {
			border: `1px solid #666`,
		},
		'.zygoteSelectErr': {
			color: `#f00`,
			border: `1px solid #f00`,
		},
		'.zygoteSelectErrMsg': {
			position: `absolute`,
			display: `inline-block`,
			fontSize: `.75em`,
			right: 0,
			bottom: -18,
		},
		'.zygoteSelectLabel': {
			position: `absolute`,
			top: -20,
			left: 0,
			fontSize: `.8em`,
			display: `block`,
			opacity: .75,
			transition: `transform .2s`,
			transform: `translate(7px, 32px)`,
			marginBottom: 5,
		},
		'.zygoteSelectLabelMoved': {
			transform: `translate(0px, 0px)`,
		},
	}
}