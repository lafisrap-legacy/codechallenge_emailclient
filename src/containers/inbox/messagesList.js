import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import moment from 'moment';

const DATE_FORMAT = 'ddd DD MMMM, H:mm';

export default ({ messages, currentMessage, selectMessage }) =>
  <ListGroup>
    {messages.map((message, i) => {
      const active = currentMessage === i;
      return (
        <ListGroupItem active={active} onClick={() => selectMessage(i)}>
          <p>
            <span>From:</span>&nbsp;
            <span>{message.sender}</span>
          </p>
          <p>
            <span>Subject:</span>&nbsp;
            <span>{message.subject}</span>
          </p>
          <p>
            <span>Sent:</span>&nbsp;
            <span>{moment.unix(message.time_sent).format(DATE_FORMAT)}</span>
          </p>
        </ListGroupItem>
      );
    })}
  </ListGroup>;
