class CounterApp extends React.Component {
	constructor(props) {
		super(props)
		this.handleAddOne = this.handleAddOne.bind(this)
		this.handleMinusOne = this.handleMinusOne.bind(this)
		this.handleReset = this.handleReset.bind(this)
		this.state = {
			count: 0
		}

	}
    
    componentDidMount() {
        try {
            const Stringcount = localStorage.getItem('count')
            const count = parseInt(Stringcount, 10)

            if(count && !isNaN(count))
                this.setState(() => ({ count: count }))
        } catch(error) {}

	}
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log('saving data')
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
            //localStorage.setItem('count', this.state.count)
        }
	}
    
    componentWillUnmount() {
	}

	handleAddOne() {
		this.setState((prevState) => ({ count: prevState.count + 1 }))
	}

	handleMinusOne() {
		this.setState((prevState) => ({ count: prevState.count - 1 }))
	}

	handleReset() {
		this.setState(() => ({ count: 0  }))
	}

	render() {
		return (
			<div>
			<Header count={this.state.count} />
			<AddOne handleAddOne={this.handleAddOne} />
			<MinusOne handleMinusOne={this.handleMinusOne} />
			<Reset handleReset={this.handleReset} />
			</div>
		)
	}
}


const Header = (props) => {
	return (
		<div>
		<h1>Counter: {props.count}</h1>
		</div>
	)
}

const AddOne = (props) => {
	return (
		<div>
		<button
		onClick={props.handleAddOne}
		>+1</button>
		</div>
	)
}

const MinusOne = (props) => {
	return (
		<div>
		<button
		onClick={props.handleMinusOne}
		>-1</button>
		</div>
	)
}

const Reset = (props) => {
	return (
		<div>
		<button
		onClick={props.handleReset}
		>Reset</button>
		</div>
	)
}

ReactDOM.render(<CounterApp />, document.getElementById('react-content'))