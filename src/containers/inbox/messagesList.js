import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

import './messagesList.css';

const DATE_FORMAT = 'ddd DD MMMM, H:mm';

export default ({ messages, currentMessage, selectMessage, deleteMessage }) =>
  <ListGroup>
    {messages.map((message, index) => {
      const active = currentMessage === index;
      return (
        <ListGroupItem
          key={message.time_sent}
          active={active}
          onClick={() => selectMessage(index)}
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

          <Button
            className="MessageListDelete"
            onClick={(e) => {
              deleteMessage(message);
              e.stopPropagation();
            }}
          >
            <FontAwesome name="trash" />
          </Button>
        </ListGroupItem>
      );
    })}
  </ListGroup>;
