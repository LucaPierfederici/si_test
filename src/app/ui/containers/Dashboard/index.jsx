import * as React from 'react';
import { Button } from '../../components/elements/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../../store/user/user.actions';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Benvenuto { this.props.user.email }
        <Button onClick={this.props.logout}>Esci</Button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user
  }),
  (dispatch) => {
    return ({
      logout: bindActionCreators(UserAction, dispatch).logoutUser,
    })
  }
)(Dashboard)