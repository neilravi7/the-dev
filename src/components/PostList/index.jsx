import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostList extends Component {
    constructor() {
        super();
    }

    render() {
        const { posts } = this.props;
        return (
            <>
                <div className="row gx-4 gx-lg-5 align-items-center m-5 ">
                    {posts.map((post, index) => (

                        <div className='d-flex justify-content-center my-3 shadow' key={`${index}-${post.created_at}`}>
                            <div className="col-lg-4 my-2">
                                <img
                                    className="img-fluid rounded"
                                    // src={post.postImage}
                                    src="https://picsum.photos/300/200"
                                    alt="post-image"
                                />
                            </div>
                            <div className="col-lg-8 my-2">
                                <h3 className="font-weight-light">{post.title}</h3>
                                <p>
                                    {post.content}
                                </p>
                                <div className='d-flex  mb-3'>
                                    <a className="btn btn-primary btn-lg bg-gradient" href={post.url}>
                                        Read Full Article
                                    </a>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </>
        );
    }
}

PostList.PropTypes = {
    posts: PropTypes.array.isRequired
}

export default PostList;