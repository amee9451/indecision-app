
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.resetOptions = this.resetOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.decide = this.decide.bind(this);
        this.deleteOption = this.deleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    // This is a lifecycle method
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options)
                this.setState(() => ({ options }));
        } catch (e) {
            // Do nothing at all
        }
    }

    // This is another lifecycle method
    componentDidUpdate(prevProps, prevState) {
        //this.state
        //this.props
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }        
    }

    // This is yet another lifecycle method
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    resetOptions() {
        this.setState(() => ({ options: [] }));
    }

    deleteOption(optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }));
    }

    addOption(option) {
        if (!option)
            return 'Enter valid value to add item';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists';
        
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    decide(){
        let index = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[index];

        alert (option);
    }

    render () {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    decide={this.decide} 
                />
                <Options 
                    options={this.state.options}
                    resetOptions={this.resetOptions}
                    deleteOption={this.deleteOption} 
                />
                <AddOption 
                    addOption={this.addOption} 
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.decide}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.resetOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>
                {props.options.map((option, index) => (
                    <Option 
                        key={index} 
                        optionText={option} 
                        deleteOption={props.deleteOption}
                    />
                ))}
            </ol>
        </div>
    );
};

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.deleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </li>
    );
};

class AddOption extends React.Component {
    constructor (props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state ={
            error: undefined
        };
    }

    onFormSubmit (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        
        const error = this.props.addOption(option);

        this.setState(() => ({ error }));

        if (!error) e.target.elements.option.value = '';
    }

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));