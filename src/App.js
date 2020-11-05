import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react-router-dom'

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

  // TEACHER
  const renderTeacherLogin = () => {
    return(
      <TeacherLogin />
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

