import React from 'react';

const MainPage = (props) => {

    const handleClickStudent = (evt) => {
        props.history.push('/student/login')
    }

    const handleClickTeacher = (evt) => {
        props.history.push('/teacher/login')
    }

    return (
        <div className="mainpage">
            <h1>Welcome to the Assignment Portal!</h1>
            <h3>Click Student or Teacher to begin</h3>
            <button onClick={handleClickStudent}>Student</button>
            <button onClick={handleClickTeacher}>Teacher</button>
        </div>
    );

};

export default MainPage;