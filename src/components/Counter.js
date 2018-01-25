import React, {Component} from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
		this.incrementCounter = this.updateCounter.bind(this, 1);
		this.decrementCounter = this.updateCounter.bind(this, -1);
	}

	render() {
		return (
			<div>
				<div>{this.state.counter}</div>
			</div>
		);
	}

	updateCounter(count) {
		this.setState({count: this.state.count + count});
	}
}

export default Counter;
