import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Table } from 'react-bootstrap';
import { getMessages } from '../../modules/messages';
import MessagesList from './messagesList';
import MessageContent from './messageContent';
import './index.css';

class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: 0
    };
  }

  selectMessage(message) {
    this.setState({
      currentMessage: message
    });
  }

  render() {
    const { messages, changePage, getMessages } = this.props;
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
        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>
        <p>
          <button onClick={getMessages}>Get Messages</button>
        </p>
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
      changePage: () => push('/write')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
