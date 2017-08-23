import axios from 'axios';

export const LOADING_MESSAGES = 'messages/LOADING_MESSAGES';
export const MESSAGES_LOADED = 'messages/GET_MESSAGES';
export const MARK_MAIL = 'messages/MARK_MAIL';
export const DELETE_MAIL = 'messages/DELETE_MAIL';

const initialState = {
  messages: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_MESSAGES:
      return {
        ...state,
        isLoading: true
      };

    case MESSAGES_LOADED:
      return {
        ...state,
        messages: action.payload,
        isLoading: false
      };

    case MARK_MAIL:
      return {
        ...state
      };

    case DELETE_MAIL:
      return {
        ...state
      };

    default:
      return state;
  }
};

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
