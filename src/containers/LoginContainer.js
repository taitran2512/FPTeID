import Login from '../components/login/Login';
import { loginAction, resetLoginAction } from '../redux/actions/index';
import { connect } from 'react-redux';

import React from 'react';
const mapStateToProps = (state) => {
   return {
      loginReduces: state.loginReducers,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      loginAction: (user, password) => {
         dispatch(loginAction(user, password));
      },
      resetLoginAction: () => {
         dispatch(resetLoginAction());
      },
   };
};

class LoginContainer extends React.Component {
   static navigationOptions = {
      headerShown: false,
   };

   render() {
      return <Login {...this.props}></Login>;
   }
}

export default LoginContainer = connect(
   mapStateToProps,
   mapDispatchToProps,
)(LoginContainer);
