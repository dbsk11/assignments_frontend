import React, { useEffect, useState } from 'react';

const MainComponent = (props) => {

    useEffect(() => {
        if(props.teacherId){
            // fetch(`http://localhost:3000/teachers/${props.teacherId}`)
            fetch("http://localhost:3000/teachers/1")
            .then(r => r.json())
            .then(data => {
                props.setTeacherAssignments(data.assignments)
                props.setKlass(data.teacher_klasses)
            }, [props.teacherId])
        };
    });

    // const klasses = klass.map((klassPOJO) => {
    //     console.log(klassPOJO)
    //     return klassPOJO.klass.name 
    // })

    const handleClick = (evt) => {

    }

    return (
        <div className="assignmentscontainer">
            <h1>Current Assignments</h1>
            <button onClick={handleClick}>Create New Assignment</button>
            {/* {arrayToRender} */}
        </div>
    );
};

export default MainComponent;