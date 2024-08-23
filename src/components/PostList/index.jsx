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
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    {posts.map((post, index) => (
                       
                            <div className='d-flex justify-content-center mb-3' key={`${index}-${post.publishedAt}`}>
                                <div className="col-lg-4 me-4">
                                    <img
                                        className="img-fluid rounded mb-4"
                                        src={post.urlToImage}
                                        alt="post-image"
                                    />
                                </div>
                                <div className="col-lg-7">
                                    <h3 className="font-weight-light">{post.title}</h3>
                                    <p>
                                        {post.description}
                                    </p>
                                    <a className="btn btn-primary btn-lg bg-gradient" href={post.url}>
                                        Read This Article on {post.source.name}
                                    </a>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </>
        );
    }
}

PostList.PropTypes = {
    posts:PropTypes.array.isRequired
}

export default PostList;