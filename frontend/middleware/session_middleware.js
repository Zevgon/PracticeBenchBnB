import { LOG_IN, LOG_OUT, SIGN_UP, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { logIn, logOut, signUp } from '../util/session_api_util';

const SessionMiddleware = ({dispatch}) => next => action => {
  const success = user => {
    return dispatch(receiveCurrentUser(user));
  }
  const error = xhr => dispatch(receiveErrors(xhr.responseJSON));
  switch (action.type) {
    case LOG_IN:
      logIn(action.user, success, error);
      return next(action);
    case LOG_OUT:
      logOut(() => next(action));
      break;
    case SIGN_UP:
      signUp(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
