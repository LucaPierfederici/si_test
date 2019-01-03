import * as React from 'react';
import UserForm from '../../components/UserForm';
import {Card} from '../../components/elements/Card';

export class Register extends React.Component {
  render() {
    return (
      <Card>
        <UserForm type="register"/>
      </Card>
    );
  }
}