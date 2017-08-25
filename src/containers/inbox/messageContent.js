//-------------------------------------------------------------
// Messaging Client (Prototype)
//
// inbox/messageContent.js
//
// Content box on the right side of the inbox
//--------------------------------------------------------------
import React from 'react';

import './messageContent.css';

export default ({ message }) => {
  const content = (message && message.message) || '';

  return (
    <span className="InboxContent">
      {content}
    </span>
  );
};
