import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOG_OUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let a = merge;
      debugger;
      return merge({}, _nullUser, {currentUser: action.currentUser});
    case LOG_OUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      return merge({}, _nullUser, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
