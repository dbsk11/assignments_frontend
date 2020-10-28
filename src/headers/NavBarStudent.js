import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarStudent = (props) => {
    return (
        <div className="navbarstudent">
            <NavLink
                to="/student/"
                exact
                activeStyle={{color: 'yellow'}}
            >Dashboard</NavLink>
            <NavLink
                to="/student/profile"
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

export default NavBarStudent;