import React from 'react';
import { Panel } from 'react-bootstrap';

export default ({ message }) => {
  const content = (message && message.message) || '';

  return (
    <span>
      {content}
    </span>
  );
};
