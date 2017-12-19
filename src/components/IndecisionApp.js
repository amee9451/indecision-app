import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    resetOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    deleteOption = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }));
    };

    addOption = (option) => {
        if (!option)
            return 'Enter valid value to add item';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists';
        
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    decide = () => {
        let index = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[index];

        alert (option);
    };

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

export default IndecisionApp;