import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMessages, markMessage } from '../../actions';
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

    if (!messages.length) return;

    console.log(7, messages[currentMessage]);
    markMessage(messages[currentMessage].id);
  }

  selectMessage(message) {
    this.setState({
      currentMessage: message
    });
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
      changePage: () => push('/write')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
