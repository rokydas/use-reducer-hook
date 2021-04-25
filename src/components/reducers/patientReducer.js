export const patientInitialState = {
    patients: []
}

export const patientReducers = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {patients: [...state.patients, action.patient]}
            break;
        case 'DELETE':
            const filteredPatient = state.patients.filter(pt => pt.id != action.id);
            return {patients: filteredPatient};
    }
}