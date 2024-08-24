import React, { Component } from 'react';
import './login.css'
import { Card } from 'react-bootstrap';

class Login extends Component {
    constructor (props) {
        super();
        this.state={
            email:'',
            password:''
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
        console.log(this.state);

        // commenting uncontrolled component code 
        // console.log(this.emailReference.current.value, this.passwordReference.current.value);
    }

    render() {
        return (
            <main className="form-signin w-100 m-auto">
                <Card>
                    <Card.Body>
                        <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
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
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={this.handleSubmit}>
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

export default Login;