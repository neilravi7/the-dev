import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
        }
    }

    handleInputs = (key, value) => {
        console.log(key, ":", value);
        this.setState({
            [key]: value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("this.state: ", this.state);
        const {first_name, last_name, bio} = this.state;
        const { id:userId } = this.props.auth.user;

        console.log("user: ", userId);

        this.props.dispatch(updateUser(
            userId,
            {
                first_name, 
                last_name,
                bio
            }
        ));
    }
    render() {

        const { error, inProgress, user } = this.props.auth;
        // console.log(this.props);
        return (
            <>
                <div className="row gx-4 gx-lg-5 align-items-center m-5 ">
                    <div className='d-flex justify-content-center my-3'>
                        <div className="col-lg-4 my-2">
                            <img
                                className="img-fluid rounded"
                                src="http://placebeard.it/200/200/notag"
                                alt="post-image"
                            />
                        </div>
                        <div className="col-lg-8 my-2">
                            <h3 className="font-weight-light">{user.first_name} {user.last_name}</h3>
                            <p>
                                Bio. Content will appear here.
                            </p>
                            <div className='d-flex  mb-3'>
                                {/* <a className="btn btn-primary btn-lg bg-gradient">
                                        Read Full Article
                                    </a> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row gx-4 gx-lg-5 align-items-center m-5">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column text-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="posts">Posts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="profile">
                                        <h3>Account Setting</h3>
                                        <div className='my-3 p-5'>
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="First Name"
                                                        // ref={this.emailReference}
                                                        onChange={(e) => this.handleInputs('first_name', e.target.value)}
                                                    />
                                                    <label htmlFor="floatingInput">First Name</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingPassword"
                                                        placeholder="Password"
                                                        // ref={this.passwordReference}
                                                        onChange={(e) => this.handleInputs('last_name', e.target.value)}

                                                    />
                                                    <label htmlFor="floatingPassword">Last Name</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="textarea"
                                                        className="form-control"
                                                        id="floatingPassword"
                                                        placeholder="Password"
                                                        // ref={this.passwordReference}
                                                        onChange={(e) => this.handleInputs('bio', e.target.value)}

                                                    />
                                                    <label htmlFor="floatingPassword">Bio</label>
                                                </div>
                                                <button
                                                    className={`w-100 btn btn-lg btn-primary`} type="submit" onClick={this.handleSubmit} disabled={inProgress}>
                                                    Update
                                                </button>
                                            </form>
                                        </div>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="posts">Second tab content</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </>
        );
    }
}

function mapStateToProp(state) {
    return {
        auth: state.auth
    }
}

const ConnectedProfileComponent = connect(mapStateToProp)(Profile)

export default ConnectedProfileComponent;