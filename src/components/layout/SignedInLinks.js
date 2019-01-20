import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

// have to pass in props because it's a functional component not a class
const SignedInLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a href='/' onClick={props.logout}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);