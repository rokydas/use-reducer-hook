import React, { useReducer, useState } from 'react';
import { patientInitialState, patientReducers } from '../reducers/patientReducer';

const PatientManagement = () => {

    const [state, dispatch] = useReducer(patientReducers, patientInitialState);
    const [patient, setPatient] = useState({});
    const handleBlur = (e) => {
        const newPatient = { ...patient };
        newPatient[e.target.name] = e.target.value;
        setPatient(newPatient);
    }

    return (
        <div>
            <h1>Patient: {state.patients.length}</h1>
            {
                state.patients.map(patient =>
                    <div>
                        <li>Name: {patient.name} Id: {patient.id}
                        <button onClick={() => dispatch({type: 'DELETE', id: patient.id})}>Delete</button></li>
                    </div>
                )
            }

            <form onSubmit={(e) => { e.preventDefault() }}>
                <input type="text" name="name" placeholder="Patient Name" onBlur={handleBlur} /> <br /> <br />
                <input type="text" name="age" placeholder="Patient Age" /> <br /> <br />
                <button onClick={() => { dispatch({ type: 'INCREMENT', patient: { name: patient.name, age: patient.age, id: new Date().toGMTString() } }) }}>Increment</button>
            </form>
        </div>
    );
};

export default PatientManagement;