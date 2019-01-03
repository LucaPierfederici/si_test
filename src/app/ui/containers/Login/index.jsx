import * as React from 'react';
import UserForm from '../../components/UserForm';
import {Card} from '../../components/elements/Card';

export class Login extends React.Component {
  render() {
    return (
      <Card>
        <UserForm type="login"/>
      </Card>
    );
  }
}