import React from 'react';
import {connect} from 'react-redux';
import {FetchPosts} from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.FetchPosts();
    }

    render() {
        return (<div>PostList</div>)
    }
}

export default connect(null, { FetchPosts})(PostList);