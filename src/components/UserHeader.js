import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { FetchAuthor } from '../actions';

const UserHeader = ({FetchAuthor, userId, user})=> {

    useEffect(()=> {
        FetchAuthor(userId);

    }, [FetchAuthor, userId])
    
    if (!user) {
        return null;
    }

    return (
    <div>
      
        <h1>UserHeader</h1>
        <p>Author is {userId}</p>
        <p>AKA {user.name}</p>
        </div>);
}

const mapStateToProps =(state, ownProps) => {
    return { user: state.users.find((user) => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, {FetchAuthor})(UserHeader)