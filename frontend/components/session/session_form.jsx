import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { formType, errors, clearErrors } = this.props;

    const errorLis = errors.map((error, i) => (
      <li key={i}>{error}</li>
    ))
    return (
      <div className="session-form-container">

        <h2>{formType}</h2>

        <ul className="session-errors">
          {errorLis}
        </ul>

        <form onSubmit={this.handleSubmit}>
          { formType === 'Sign Up' ? (
            <label>
              Username:
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
          ) : (
            null
          )}
          <label>
            Email:
            <input 
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>
            Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <button type="submit">{formType}</button>
          {
            formType === 'Sign Up' ? (
              <Link to='/login' onClick={clearErrors}>Log In</Link>
            ) : (
              <Link to='/signup' onClick={clearErrors}>Sign Up</Link>
            )
          }
        </form>
      </div>
    );
  }
}

export default SessionForm;