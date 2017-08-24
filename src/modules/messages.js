export const LOADING_MESSAGES = 'messages/LOADING_MESSAGES';
export const MESSAGES_LOADED = 'messages/GET_MESSAGES';
export const MARK_MAIL = 'messages/MARK_MAIL';
export const DELETE_MAIL = 'messages/DELETE_MAIL';

const initialState = {
  messages: [],
  isLoading: false
};

let messageId = 1000;

export default (state = initialState, action) => {
  const messages = state.messages;

  switch (action.type) {
    case LOADING_MESSAGES:
      return {
        ...state,
        isLoading: true
      };

    case MESSAGES_LOADED:
      // Add properties to each message
      const newMessages = action.payload.map(message => {
        return {
          ...message,
          read: false,
          id: messageId++
        };
      });

      return {
        ...state,
        messages: state.messages.concat(newMessages),
        isLoading: false
      };

    case MARK_MAIL:
      const message = messages.find(message => message.id === action.payload);

      if (message) message.read = true;

      return {
        ...state,
        messages
      };

    case DELETE_MAIL:
      messages.splice(messages.indexOf(action.payload), 1);

      return {
        ...state,
        messages
      };

    default:
      return state;
  }
};
