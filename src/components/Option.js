import React from 'react';

const Option = (props) => (
    <li>
        {props.optionText}
        <button 
            className="button button--link"
            onClick={(e) => {
                props.deleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </li>
);

export default Option;