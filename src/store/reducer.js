import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant'

const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.input
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.input]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.input, 1);
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action !');
    }
}

export {initState};
export default reducer;