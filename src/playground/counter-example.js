class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.onAddOneClick = this.onAddOneClick.bind(this);
        this.onSubtractOneClick = this.onSubtractOneClick.bind(this);
        this.onResetClick = this.onResetClick.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount () {
        const count = parseInt(localStorage.getItem('count'));

        if (!isNaN(count)) this.setState(() => ({ count }));
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.count !== this.state.count)
            localStorage.setItem('count', this.state.count);
    }

    onAddOneClick () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    onSubtractOneClick () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    onResetClick () {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onAddOneClick}>+1</button>
                <button onClick={this.onSubtractOneClick}>-1</button>
                <button onClick={this.onResetClick}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/*
let count = 0;

const addOneClickHandler = () => {
    count++;
    renderCounterApp();
};

const subtractOneClickHandler = () => {
    count--;
    renderCounterApp();
};

const resetClickHandler = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOneClickHandler}>+1</button>
            <button onClick={subtractOneClickHandler}>-1</button>
            <button onClick={resetClickHandler}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/