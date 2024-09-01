import React, { Component, useState } from 'react';
import './login.css'
import { Card } from 'react-bootstrap';
import { clearAuthState, login } from '../../actions/auth';
import { connect } from 'react-redux';

import withRouter from '../../helpers/withRouter';
import { Navigate } from 'react-router-dom';

class Login extends Component {
    constructor (props) {
        super();
        this.state={
            email:'',
            password:'',
            formError:undefined,
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

    handleSubmit = (e) => {
        e.preventDefault();
        const nextLocation = this.props.location?.from?.pathname || '/';
        console.log("nextLocation", nextLocation);

        const {email, password} = this.state;

        if(email && password){
            this.props.dispatch(login(email, password, nextLocation));
            
        }else{
            this.setState({
                formError:'All fields are password required'
            });
        }

        // commenting uncontrolled component code 
        // console.log(this.emailReference.current.value, this.passwordReference.current.value);
    }

    componentWillUnmount() {
        console.log("component will unmount");
        this.props.dispatch(clearAuthState());
        this.setState({
            formError:null
        });
    }
    

    render() {
        const {error, inProgress, isLoggedIn } = this.props.auth;

        if(isLoggedIn){
            const nextLocation = this.props.location?.from?.pathname || '/';
            return<Navigate to={nextLocation}/>
        }
        const {formError} = this.state;
        return (
            <main className="form-signin w-100 m-auto bg-light">
                <Card>
                    <Card.Body>
                        <h1 className="h3 mb-3 fw-normal text-primary">Login</h1>

                        {error && <><div className='d-flex justify-content-center rounded bg-danger my-3'><p className="m-2 text-light">{error}</p> </div></>}
                        {formError && <><div className='d-flex justify-content-center rounded bg-danger my-3'><p className="m-2 text-light">{formError}</p> </div></>}

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

                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                {/* <label>
                                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                                </label> */}
                            </div>
                            <button 
                                className={`w-100 btn btn-lg btn-primary`} type="submit" onClick={this.handleSubmit} disabled={inProgress}>
                                Sign in
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

const ConnectedLogin = connect(mapStateToProp)(withRouter(Login))
export default ConnectedLogin;