import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <>
                <div className="row gx-4 gx-lg-5 align-items-center m-5 ">
                        <div className='d-flex justify-content-center my-3 shadow'>
                            {/* <div className="col-lg-4 my-2">
                                <img
                                    className="img-fluid rounded"
                                    // src={post.postImage}
                                    src="https://picsum.photos/300/200"
                                    alt="post-image"
                                />
                            </div> */}
                            <div className="col-lg-8 my-2">
                                <h3 className="font-weight-light">Implementation Of This Page in Progress</h3>
                                <p>
                                   Content will appear here.
                                </p>
                                <div className='d-flex  mb-3'>
                                    {/* <a className="btn btn-primary btn-lg bg-gradient">
                                        Read Full Article
                                    </a> */}
                                </div>

                            </div>

                        </div>
                </div>

            </>
        );
    }
}

export default Profile;