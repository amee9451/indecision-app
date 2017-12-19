import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const DecisionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearDecision}>Okay</button>
    </Modal>
);

export default DecisionModal;