import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarTeacher = (props) => {
    return (
        <div className="navbar">
            <NavLink
                to="/teacher/"
                exact
                activeStyle={{color: 'yellow'}}
            >Dashboard</NavLink>
            <NavLink
                to="/teacher/profile"
                exact
                activeStyle={{color: 'yellow'}}
            >Profile</NavLink>
            <NavLink
                to="/"
                exact
                activeStyle={{color: 'yellow'}}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarTeacher;