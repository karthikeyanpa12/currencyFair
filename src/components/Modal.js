import React, { Component } from "react";
import "./modal.css";

export default class Modal extends Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        const { showModal } = this.props;
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="modal">
                <div className="modal-title">Identity verification required</div>
                <div className="modal-sub-title">For your security, we occasionally require you to verify your idenity by
                     entering a code sent to your mobile device
                </div>
                <div className="modal-content">
                    <div> Enter the code sent via SMS to + 353 872251177</div>
                    <div className="input-container">
                        <input /> <input /> <input /> <input /> <input /> <input />
                    </div>
                    <div>
                        <span className="small-font"> Receive a new code </span>
                        <span className="small-font"> Receive code via call instead </span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="verify-button"> Verify Identity</button>
                    <button className="back-button" onClick={this.onClose}> Back</button>
                    <span className="float-right restrict"> I can't access this mobile device</span>
                </div>
            </div>
        );
    }
}