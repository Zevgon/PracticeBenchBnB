import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn, signUp } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processFormStuff = (formType === 'logIn') ? logIn : signUp;
  return {
    processForm: user => dispatch(processFormStuff(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
