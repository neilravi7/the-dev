import React, { Component } from 'react';
import '../Login/login.css'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { requestCreator } from '../../helpers/utils';
import { API_URL } from '../../helpers/urls';

class SignUp extends Component {
    constructor (props) {
        super();
        this.state={
            email:'',
            password:'',
            confirmPassword:'',
            inProgress:false,
            error:null
        }
        // commenting uncontrolled component code 
        // this.emailReference = React.createRef();
        // this.passwordReference = React.createRef();
    }

    handleEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    handleConfirmPassword = (e) => {
        this.setState({
            confirmPassword:e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        
        const {email, password:password1 , confirmPassword:password2} = this.state;
        if(email && password1 && password2){
            const url = API_URL.signUp();
            const requestOptions = requestCreator("POST", {email, password1, password2});
            fetch(url, requestOptions)
                .then((response) => {
                    if(response.status === 201){
                        window.location = "/login"
                        return response.json()
                    }
                    return response.json();
                })
                .then((data) => {
                    this.setState({
                        error:data.non_field_errors[0]
                    })
                })
                .catch((error) => console.error(error));
        }
        else{
            this.setState({
                error:"All Fields are required."
            })
            
        }
    }

    render() {
        const {error, inProgress} = this.state;
        return (
            <main className="form-signin w-100 m-auto">
                <Card>
                    <Card.Body>
                        <h1 className="h3 mb-3 fw-normal text-primary">Sign Up</h1>

                        {error && <><div className='d-flex justify-content-center rounded bg-danger my-3'><p className="m-2 text-light">{error}</p> </div></>}


                        <form>
                            {/* <img
                        className="mb-4"
                        src=""
                        alt=""
                        width={72}
                        height={57}
                    /> */}
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    // ref={this.emailReference}
                                    value={this.email}
                                    onChange={this.handleEmail}
                                    required
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    // ref={this.passwordReference}
                                    value={this.password}
                                    onChange={this.handlePassword}
                                    required

                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingConfirmPassword"
                                    placeholder="Confirm Password"
                                    // ref={this.passwordReference}
                                    value={this.confirmPassword}
                                    onChange={this.handleConfirmPassword}
                                    required

                                />
                                <label htmlFor="floatingPassword">Confirm Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                {/* <label>
                                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                                </label> */}
                            </div>
                            <button 
                                className={`w-100 btn btn-lg btn-primary`} type="submit" onClick={this.handleSubmit} disabled={inProgress}>
                                Create Account
                            </button>
                            {/* <p className="mt-5 mb-3 text-muted">© 2017–2022</p> */}
                            
                        </form>
                    </Card.Body>
                </Card>

            </main>

        );
    }
}

function mapStateToProp(state){
    return{
        auth:state.auth
    }
}

const ConnectedSignUp = connect(mapStateToProp)(SignUp)
export default ConnectedSignUp;