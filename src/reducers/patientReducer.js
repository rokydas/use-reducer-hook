export const patientState = {
    patients: []
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PATIENT": 
            const newPatient = {name: action.name, id: action.id};
            const allPatients = [...state.patients, newPatient];
            return {patients: allPatients};
        case "REMOVE_PATIENT": 
            const id = action.id;
            const remainingPatients = state.patients.filter(pt => pt.id !== action.id);
            return {patients: remainingPatients}; 
        default:
            return state;
    }
}