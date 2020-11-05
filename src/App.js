import React, { useState, useEffect } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

// MAIN COMPONENTS
import Header from './headers/Header';
import MainPage from './headers/MainPage';

// TEACHER COMPONENTS
import NavBarTeacher from './headers/NavBarTeacher';
import MainComponent from './components_teacher/MainComponent'
import TeacherLogin from './components_teacher/TeacherLogin'


// STUDENT COMPONENTS
import StudentLogin from './components_student/StudentLogin'

const App = () => {
  // Initialize History
  const history = useHistory();

//TEACHER STATES:
  //TEACHER LOGIN:
  const [teacherUsername, setTeacherUsername] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");


  // TEACHER
  const handleTeacherLoginSubmit = (userInfo) => {

  }

  const renderTeacherLogin = () => {
    return(
      <TeacherLogin 
        teacherUsername={teacherUsername}
        teacherPassword={teacherPassword}
        setTeacherUsername={setTeacherUsername}
        setTeacherPassword={setTeacherPassword}
        handleLoginSubmit={handleTeacherLoginSubmit}
      />
    )
  }


  // RETURN
  return (
    <div className="maincontainer">
      <Header />
      <NavBarTeacher />

      <Route exact path="/" render={() => <MainPage history={history} />} />

      <Switch>
        {/* TEACHER */}
        <Route exact path="/teacher/login" render={() => renderTeacherLogin()} />

        {/* STUDENT */}
        {/* <Route exact path="/student/login" render={() => renderStudentLogin()}/> */}
      </Switch>
    </div>
  );
};

export default withRouter(App);

