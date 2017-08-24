import axios from 'axios';
import {
  LOADING_MESSAGES,
  MESSAGES_LOADED,
  MARK_MAIL,
  DELETE_MAIL
} from './modules/messages';

export const getMessages = () => {
  return dispatch => {
    dispatch({
      type: LOADING_MESSAGES
    });

    return axios
      .get('../../data/messages.json')
      .then(response => {
        dispatch({
          type: MESSAGES_LOADED,
          payload: response.data.messages
        });
      })
      .catch(err => console.log(err));
  };
};

export const markMessage = messageId => {
  return dispatch => {
    dispatch({
      type: MARK_MAIL,
      payload: messageId
    });
  };
};

export const deleteMessage = messageId => {
  return dispatch => {
    dispatch({
      type: DELETE_MAIL,
      payload: messageId
    });
  };
};
