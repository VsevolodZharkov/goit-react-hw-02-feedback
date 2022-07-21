import { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    users: [],
  };

  addUserData = user => {
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
  };

  render() {
    return (
      <>
        <Form addUserData={this.addUserData} />
      </>
    );
  }
}
