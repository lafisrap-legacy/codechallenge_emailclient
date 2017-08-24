import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import rewire from 'rewire';

import Inbox from './index';
import MessagesList from './messagesList';
import MessageContent from './messageContent';

const MESSAGES = [
  {
    "uid": "21",
    "sender": "Ernest Hemingway",
    "subject": "animals",
    "message": "This is a tale about nihilism. The story is about a combative nuclear engineer who hates animals. It starts in a ghost town on a world of forbidden magic. The story begins with a legal dispute and ends with a holiday celebration.",
    "time_sent": 1459239867
  },
  {
    "uid": "22",
    "sender": "Stephen King",
    "subject": "adoration",
    "message": "The story is about a fire fighter, a naive bowman, a greedy fisherman, and a clerk who is constantly opposed by a heroine. It takes place in a small city. The critical element of the story is an adoration.",
    "time_sent": 1459248747
  },
  {
    "uid": "23",
    "sender": "Virgina Woolf",
    "subject": "debt",
    "message": "The story is about an obedient midwife and a graceful scuba diver who is in debt to a fence. It takes place in a magical part of our universe. The story ends with a funeral.",
    "time_sent": 1456767867
  },
  {
    "uid": "24",
    "sender": "George Orwell",
    "subject": "chemist",
    "message": "This is a tale about degeneracy. The story is about a chemist. It takes place in a manufacturing city. The story begins with growth.",
    "time_sent": 1456744407
  },
  {
    "uid": "25",
    "sender": "James Joyce",
    "subject": "nuclear engineer",
    "message": "The story is about an ugly nuclear engineer. It starts in a manufacturing city in Africa. The future of warfare is a major part of this story.",
    "time_sent": 1456733427
  },
  {
    "uid": "26",
    "sender": "Jane Austen",
    "subject": "treasure-hunter",
    "message": "The story is about a treasure-hunter and a treasure-hunter who is constantly annoyed by a misguided duke. It takes place on a forest planet in a galaxy-spanning commonwealth. The critical element of the story is a door being opened",
    "time_sent": 1456730427
  }
];

it('creates an Inbox component', () => {
  // Render a checkbox with label in the document
  const expectedState = {
    messages: {
      messages: MESSAGES,
      isLoading: false
    }
  };
  const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    isLoading: state.messages.isLoading
  });

  const ConnectedComponent = connect(mapStateToProps)(Inbox);
  const InboxWrapper = shallowWithStore(<Inbox />, createMockStore(expectedState));

  expect(InboxWrapper.props().messages).toHaveLength(6);
});