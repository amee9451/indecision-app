import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const DecisionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearDecision}>Okay</button>
    </Modal>
);

export default DecisionModal;