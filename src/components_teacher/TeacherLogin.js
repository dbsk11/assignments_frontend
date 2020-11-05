import React, { Component } from 'react';

const TeacherLogin = (props) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const user={
            username: evt.target.username.value,
            password: evt.target.password.value
        }
        props.handleTeacherLoginSubmit(user)
    }

    return(
        <div className="teacherlogin">
            <h1>Teacher Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        autoComplete="off"
                        name="username"
                        value={props.teacherUsername} 
                        onChange={(e) => props.setTeacherUsername(e.target.value)} 
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text" 
                        autoComplete="off"
                        name="password"
                        value={props.teacherPassword} 
                        onChange={(e) => props.setTeacherPassword(e.target.value)} 
                    />
                </div>
                <div className="submitbutton">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default TeacherLogin;
