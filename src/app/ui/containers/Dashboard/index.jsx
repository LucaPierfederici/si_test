import * as React from 'react';
import { Button } from '../../components/elements/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../../store/user/user.actions';
import { injectIntl } from 'react-intl';
import styled from 'styled-components'

export const P = styled.p`
float: left;
margin: 1em;
`
class Dashboard extends React.Component {
  render() {
    const { user, logout, intl } = this.props;
    return (
      <div>
        <P>{intl.formatMessage({ id: 'dashboard.welcome' }, { user: user.email })}</P>
        <Button onClick={logout} right>{intl.formatMessage({ id: 'shared.exit' })}</Button>
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
)(injectIntl(Dashboard))