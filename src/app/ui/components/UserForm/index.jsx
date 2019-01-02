import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../../store/user/user.actions';
import PropTypes from 'prop-types';


class UserForm extends React.Component{

  constructor (prop){
    super(prop)

    this.state = {
      email: "",
      password: ""
    };
  }

  onSave () {
    this.props.saveUser && this.props.saveUser({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    const { user } = this.props;
    return user && (
      <div>
        <h3>Login user</h3>
        {this.props.errorMessage && (<label>{this.props.errorMessage}</label>)}
        <div >
          <div>
            <label>Email</label>
            <input placeholder="email" onChange={e => this.setState({ email: e.target.value}) }/>
          </div>
          <div>
            <label>Password</label>
            <input placeholder="password" onChange={e => this.setState({ password: e.target.value}) } type="password"/>
          </div>
        </div>
        <button onClick={this.onSave.bind(this)}>Save</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    user: state.user,
    errorMessage: state.components.userForm.errorMessage
  }),
  (dispatch) => ({
    saveUser: bindActionCreators(UserAction, dispatch).saveUser
  })
)(UserForm)

UserForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.any,
  saveUser: PropTypes.func,
  errorMessage: PropTypes.string
}
