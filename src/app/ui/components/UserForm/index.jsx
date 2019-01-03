import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../../store/user/user.actions';
import PropTypes from 'prop-types';
import { UsersListAction } from '../../../store/usersList/usersList.actions';
import capitalize from 'lodash/capitalize';
import { Button } from '../../components/elements/Button';
import { Input } from '../../components/elements/Input';

class UserForm extends React.Component {

  constructor(prop) {
    super(prop)

    this.state = {
      email: "",
      password: ""
    };
  }

  onClick(e) {
    e.preventDefault();
    this.props[this.props.type] && this.props[this.props.type]({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    const { user } = this.props;
    return user && (
      <div>
        <h3>{capitalize(this.props.type)} user</h3>
        {this.props.errorMessage && (<label>{this.props.errorMessage}</label>)}
        <form >
          <div>
            <label>Email</label>
            <Input placeholder="email" onChange={e => this.setState({ email: e.target.value })} />
          </div>
          <div>
            <label>Password</label>
            <Input placeholder="password" onChange={e => this.setState({ password: e.target.value })} type="password" />
          </div>
          <Button type="submit" onClick={this.onClick.bind(this)}>{this.props.type.toUpperCase()}</Button>
        </form>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    user: state.user,
    errorMessage: state.components.userForm.errorMessage
  }),
  (dispatch) => {
    return ({
      register: bindActionCreators(UsersListAction, dispatch).addUser,
      login: bindActionCreators(UserAction, dispatch).loginUser,
    })
  }
)(UserForm)

UserForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.any,
  saveUser: PropTypes.func,
  errorMessage: PropTypes.string,
  type: PropTypes.string.isRequired
}
