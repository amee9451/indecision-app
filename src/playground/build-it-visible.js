class VisibilityToggle extends React.Component {
    constructor (props){
        super(props);

        this.onToggleClick = this.onToggleClick.bind(this);

        this.state = {
            visibility: false
        }
    }

    onToggleClick () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleClick}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (<p>Hey. There are some details you can now see!</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*

const appData = {
    isVisible: false,
    hideLabel: 'Hide details',
    showLabel: 'Show details'
};

const onVisibilityToggle = () => {
    appData.isVisible = !appData.isVisible;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibilityToggle}>{appData.isVisible ? appData.hideLabel : appData.showLabel}</button>
            {appData.isVisible && <p>Here are the details! Woo woo!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
*/