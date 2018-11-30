import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.sendSomeData = this.sendSomeData
        this.updateMessage = this.updateMessagethis.state = {
            content: null,
            messageValue: '',
        };
    }
    render() {
        return (
            <div className="content-area">
            {this.state.content}
            <div className="messages">
            {
                //this.props.messages.map((messagesData, 1) => <Message key={i} content={message});
                JSON.stringify(this.props.messages)
            }
            </div>
            <input value={this.state.messageValue} onChange={this.updateMessage}>
            </input>
            </div>
        );
    }
}





const mapStateToProps = (state, ownProps) => {
    return {
        messages : state.testReducer.messages,
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);