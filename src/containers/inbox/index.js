//-------------------------------------------------------------
// Messaging Client (Prototype)
//
// inbox/index.js
//
// Inbox root component
//--------------------------------------------------------------
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMessages, markMessage, deleteMessage } from '../../actions';
import MessagesList from './messagesList';
import MessageContent from './messageContent';

import './index.css';

class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: 0
    };

    props.getMessages();
  }

  componentDidMount() {
    this.selectMessage(0);
  }

  componentDidUpdate() {
    const { messages, markMessage } = this.props;
    const { currentMessage } = this.state;

    if (!messages.length || !messages[currentMessage]) return;

    markMessage(messages[currentMessage].id);
  }

  selectMessage(message) {
    this.setState({
      currentMessage: message
    });
  }

  deleteMessage(message) {
    const { messages, deleteMessage } = this.props;
    const { currentMessage } = this.state;
    const index = messages.indexOf(message);

    deleteMessage(message.id);

    // Move selection one up, when it is below the deleted
    if (currentMessage > index)
      this.setState({
        currentMessage: currentMessage - 1
      });

    this.forceUpdate(); // Necessary after the use of e.stopPropagation()
  }

  render() {
    const { messages } = this.props;
    const { currentMessage } = this.state;

    return (
      <Table className="InboxTable">
        <thead>
          <tr>
            <th>Inbox Messages</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="InboxMessagesList">
              <MessagesList
                messages={messages}
                currentMessage={currentMessage}
                selectMessage={message => this.selectMessage(message)}
                deleteMessage={message => this.deleteMessage(message)}
              />
            </td>
            <td className="InboxMessageContent">
              <MessageContent message={messages[currentMessage]} />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages,
  isLoading: state.messages.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMessages,
      markMessage,
      deleteMessage,
      changePage: () => push('/write')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
