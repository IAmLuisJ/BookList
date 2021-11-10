import React from 'react';
import {connect} from 'react-redux';
import {FetchPosts} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.FetchPosts();
    }

    renderPost() {
      return this.props.posts.map((post)=> {
                return (<div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <UserHeader userId={post.userId}/>
                    </div>)
            })}

    render() {
        return (<div>
            <h1>Posts</h1>
            {this.renderPost()}
            </div>);
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts}
}

export default connect(mapStateToProps, { FetchPosts})(PostList);