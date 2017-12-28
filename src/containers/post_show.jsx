import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';

class PostShow extends Component{
    componentWillMount(){
        this.props.fetchPost(this.props.match.params.id)
    }

    deletePost = () => {
        this.props.deletePost(this.props.match.params.id)
            .then(()=>this.props.history.push('/'));
    };

    render(){
        const {post} = this.props;
        if(this.props.post)
            return (<div>
                <Link to='/'>Back to posts index</Link>
                <button className="btn btn-danger pull-right" onClick={this.deletePost}>Delete post</button>
                <h1>{post.title}</h1>
                <h3>{post.categories}</h3>
                <p>{post.content}</p>
            </div>);
        return <div>Loading...</div>;

    }
}

const mapStateToProps = (state) =>
    ({ post: state.posts.current
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(Object.assign({},{fetchPost}, {deletePost}), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);