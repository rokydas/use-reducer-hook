import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {

    const nameRef = useRef();

    const [state, dispatch] = useReducer(patientReducer, patientState);

    const handleSubmit = (e) => {
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1,
        });
        nameRef.current.value = '';
        e.preventDefault();
    }

    return (
        <div className="text-center">
            <h1>Manage Doctor Chamber: {state.patients.length} </h1>

            <form action="">
                <input type="text" className="form-control"
                    placeholder="Patient Name" name="patientName"
                    ref={nameRef} required />
                <button type="submit" onClick={handleSubmit} className="btn btn-primary" >Add Patient</button>
            </form>

            {
                state.patients.map(pt => <div
                    key={pt.id}
                >
                    <span>{pt.name}</span> &nbsp;
                        <button onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id})} className="custom-danger">Delete</button>
                </div>)
            }


        </div>
    );
};

export default PatientManagement;