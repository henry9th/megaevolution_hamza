/* login.jsx */
import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';

export class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: "",
      password: "",
      verifyPassword: "",
      errorMessage: ""
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password) {
      var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return re.test(password);
  }

  responseGoogle = async googleData => {

    console.log(googleData);
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }
  
  verifyEmail = () => { 
    if (!this.validateEmail(this.state.email)) { 
      this.setState({errorMessage: "Please provide a valid email"});
      return;
    }

  }

  render() {
    return (
      <div className="form-container" id="auth-form-container">

        {this.state.isLogin && 
        <div>
          <h3 className="section-title mb-3">Sign In</h3>
          <p>Login using an existing account or create a new account <span>here</span>.</p>
          <form name="contactForm" id='contact_form' className="form-border" action='#'>

              <div className="field-set">
                  <input type='text' name='email' id='email' className="form-control" placeholder="Email" onChange={event => this.setState({email: event.target.value})}/>
              </div>
            
              <div className="field-set">
                  <input type='password' name='password' id='password' className="form-control" placeholder="Password" onChange={event => this.setState({password: event.target.value})}/>
              </div>
            
            <div className="field-set">
              <input type='submit' id='send_message' value='Submit' className="btn btn-main inline btn-fullwidth color-2"/>
              <input type="button" id='register-btn' value='Register' onClick={()=>this.setState({isLogin: false})} className="btn btn-main inline btn-fullwidth color-2"/>
              <GoogleLogin
                  clientId="883463370678-151evus568cf408i6ofip9ujsasccdvh.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />    
            </div>
            
            <div>
              <p className="error-message">{this.state.errorMessage}</p>
            </div> 

          </form>
        </div>
        }

        {!this.state.isLogin && 
        <div>
          <h3 className="section-title mb-3">Register</h3>
          <p>Create a new account<span> here</span>.</p>
          <form name="contactForm" id='contact_form' className="form-border" action='#'>

              <div className="field-set">
                  <input type='text' name='email' id='email' className="form-control inline" placeholder="Email" onChange={event => this.setState({email: event.target.value})}/>
                  <input type='button' name='verify-email' onClick={()=>this.verifyEmail()} id='verify-email-btn' className="form-control btn btn-main inline" value="Verify-Email"/>
              </div>
            
              <div className="field-set">
                  <input type='password' name='password' id='password' className="form-control" placeholder="Password" onChange={event => this.setState({password: event.target.value})}/>
              </div>

              <div className="field-set">
                  <input type='password' name='password' id='password' className="form-control" placeholder="Verify Password" onChange={event => this.setState({verifyPassword: event.target.value})}/>
              </div>
            
            <div className="field-set">
              <input type='submit' id='send_message' value='Submit' className="btn btn-main inline btn-fullwidth color-2"/>
              <GoogleLogin
                  clientId=""
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />    

              <input type id='login-btn' value='Already have an account' onClick={()=>this.setState({isLogin: true})} className="btn btn-main inline btn-fullwidth mt-3 color-2"/>
            </div>

            <div>
              <p className="error-message">{this.state.errorMessage}</p>
            </div> 
            
          </form>
        </div>
        }


      </div>
    );
  }
}

export default LoginRegister;