import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import moment from 'moment';

import './messagesList.css';

const DATE_FORMAT = 'ddd DD MMMM, H:mm';

export default ({ messages, currentMessage, selectMessage }) =>
  <ListGroup>
    {messages.map((message, i) => {
      const active = currentMessage === i;
      return (
        <ListGroupItem
          key={message.time_sent}
          active={active}
          onClick={() => selectMessage(i)}
          className={message.read ? '' : 'MessageListRead'}
        >
          <span className="MessageListLabel">From:</span>&nbsp;
          <span>{message.sender}</span>
          <br />
          <span className="MessageListLabel">Subject:</span>&nbsp;
          <span>{message.subject}</span>
          <br />
          <span className="MessageListLabel">Sent:</span>&nbsp;
          <span>{moment.unix(message.time_sent).format(DATE_FORMAT)}</span>
        </ListGroupItem>
      );
    })}
  </ListGroup>;
