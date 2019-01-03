import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../../store/user/user.actions';
import PropTypes from 'prop-types';
import { UsersListAction } from '../../../store/usersList/usersList.actions';
import capitalize from 'lodash/capitalize';
import { Button, Input, ErrorMessage, Link } from '../../components/elements';
import { injectIntl } from 'react-intl'

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
    const { user, intl, type, errorMessage, errorParams } = this.props;
    return user && (
      <div>
        <h2>{intl.formatMessage({ id: 'form.title' }, { type: intl.formatMessage({ id: `form.title.${type}` }) })} </h2>
        <form>
          <div>
            <label>{intl.formatMessage({ id: 'shared.email' })}</label>
            <Input placeholder={intl.formatMessage({ id: 'shared.email' })} onChange={e => this.setState({ email: e.target.value })} />
          </div>
          <div>
            <label>{intl.formatMessage({ id: 'shared.password' })}</label>
            <Input placeholder={intl.formatMessage({ id: 'shared.password' })}
              onChange={e => this.setState({ password: e.target.value })} type="password" />
          </div>
          {errorMessage.text && (<ErrorMessage>{intl.formatMessage({id: `${errorMessage.text}`}, errorParams)}</ErrorMessage>)}
          <Button type="submit" onClick={this.onClick.bind(this)} uppercase>{intl.formatMessage({ id: `form.${type}` })}</Button>
        </form>
        {type === "login" && (<div><hr /> <Link to="/register">{intl.formatMessage({ id: 'form.register' })}</Link></div>)}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    user: state.user,
    errorMessage: state.components.userForm.errorMessage,
    errorParams: state.components.userForm.errorMessage.params || {}
  }),
  (dispatch) => {
    return ({
      register: bindActionCreators(UsersListAction, dispatch).addUser,
      login: bindActionCreators(UserAction, dispatch).loginUser,
    })
  }
)(injectIntl(UserForm))

UserForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.any,
  saveUser: PropTypes.func,
  errorMessage: PropTypes.object,
  errorParams: PropTypes.object,
  type: PropTypes.string.isRequired
}
