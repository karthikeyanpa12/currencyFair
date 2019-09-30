import React, { Component } from "react";
import Modal from './Modal';
import { connect } from 'react-redux';
import { getTransaction } from '../action';
import "./Transaction.css";

export class Transaction extends Component {
    state = { showModal: false };

    componentDidMount() {
        this.props.getTransaction();
    }

    enableModal = () => this.setState({ showModal: true })
    onClose = () => this.setState({ showModal: false })

    render() {
        const { showModal } = this.state;
        const { rate, fee } = this.props.transaction;
        const receiver = (2000.00 * rate) - fee;
        return (
            <div className="transaction-container">
                <div className="transaction">
                    <span>Let's set up your transaction!</span>
                    <div className="info">Specify the amount to be sent or received</div>
                    <div className="money-send">
                        <div className="label">
                            <span className="you-send">YOU SEND</span>
                            <span className="float-right">EUR</span>
                        </div>
                        <div>£ 2,000.00 </div>
                    </div>
                    <div className="money-reciever">
                        <div className="label">
                            <span className="receiver">RECEIVER GETS</span>
                            <span className="float-right">GBP</span>
                        </div>
                        <div>£ {receiver}  </div>
                    </div>
                </div>
                <Modal show={showModal} onClose={this.onClose}></Modal>
                <button onClick={this.enableModal}> Next</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    };
};


export default connect(mapStateToProps, { getTransaction })(Transaction);

