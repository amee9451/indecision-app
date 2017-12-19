import React from 'react';

import Option from './Option';

const Options = (props) => (
    <div>
        <button 
            className="button button--link"
            onClick={props.resetOptions}
        >
            Remove All
        </button>
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

export default Options;