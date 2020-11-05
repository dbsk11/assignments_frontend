import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarTeacher = (props) => {
    return (
        <div className="navbar">
            <NavLink
                to="/teacher/"
                exact
                activeStyle={{color: 'red'}}
            >Assignments</NavLink>
            <NavLink
                to="/teacher/profile"
                exact
                activeStyle={{color: 'red'}}
            >Profile</NavLink>
            <NavLink
                to="/"
                exact
                activeStyle={{color: 'red'}}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarTeacher;