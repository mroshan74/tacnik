import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startUserLogin } from '../../store/actions/userActions'

class Login extends Component {
  state = {
    phone: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { phone, password } = this.state
    const formData = {
      phone,
      password,
    }
    this.props.dispatch(startUserLogin(formData))
    this.props.handleModalsStatus()
    this.setState({
      phone: '',
      password: ''
    })
    console.log(formData)
  }
  render() {
    return (
      <div className='login-bg'>
        <div className='login-container'>
        <h4>Login</h4>
          <form className='login-form' onSubmit={this.handleSubmit}>
            <div className='form-control'>
              <input
                type='number'
                name='phone'
                id='phone'
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder='Enter your Phone Number'
              />
            </div>

            <div className='form-control'>
              <input
                type={this.state.show ? 'text' : 'password'}
                name='password'
                id='password'
                value={this.state.password}
                onChange={this.handleChange}
                placeholder='Password'
              />
            </div>

            <div className='checkbox-control'>
              <div>
                <input
                  type='checkbox'
                  name='show'
                  id='show'
                  value={this.state.show}
                  onClick={this.handleShow}
                />
                <label htmlFor='show'>Show password</label>
              </div>
            </div>
            <input className='btn-login' type='submit' value='Sign In' />
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
