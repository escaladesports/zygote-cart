import React from 'react'
import Cart from './cart'
import styles from '../styles'
import settingsState from '../state/settings'
import addTotalModification from '../utils/add-total-modification'
import calculateTotals from '../utils/calculate-totals'

export default class Zygote extends React.Component {
	static defaultProps = {
		styles: true,
	}
	constructor(props) {
		super(props)
		settingsState.setState(props)
	}
	componentDidMount() {
		const { totalModifications } = this.props
		if (totalModifications) {
			addTotalModification(totalModifications)
		}
		calculateTotals()
	}
	render(){
		return (
			<div className={this.props.styles === true ? styles : ``}>
				<Cart />
			</div>
		)
	}
}