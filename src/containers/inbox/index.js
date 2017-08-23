import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessages } from '../../modules/messages';

const Inbox = props =>
  <div>
    <h1>Inbox</h1>
    <p>
      {props.messages.map(message =>
        <p>
          {message.sender}
        </p>
      )}
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
    <p>
      <button onClick={props.getMessages}>Get Messages</button>
    </p>
  </div>;

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
