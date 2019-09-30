import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SendDetails extends Component {
    render() {
        const { rate, fee, deliveryDate } = this.props.transaction;
        const receiver = (2000.00 * rate) - fee;

        return (
            <div className="sent-container">
                <div className="sent-details">
                    <div>
                        <div className="sent-border">Sending Details</div>
                        <span className="align-left"> You send </span> <span className="float-right">£2000.00</span>
                    </div>
                    <div>
                        <div className="sent-border receiver"><span>Receving Details</span> <span className="float-right color-blue"> As of right now</span></div>
                        <div className="align-left"><span >Rate</span><span className="float-right">{rate}</span></div>
                        <div className="align-left"><span >Fee</span><span className="float-right">${fee}</span></div>
                        <div className="align-left"><span >Delivery date</span><span className="float-right">{deliveryDate}</span></div>
                        <div className="align-left"><span >Recipent gets</span><span className="float-right">£{receiver}</span></div>
                    </div>
                    <div className="sent-border saved">
                        You save £66.19 compared your bank!
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    };
};


export default connect(mapStateToProps)(SendDetails);

