import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant'

export const setJob = input => {
    return {
        type: SET_JOB,
        input
    }
}

export const addJob = input => {
    return {
        type: ADD_JOB,
        input
    }
}

export const deleteJob = input => {
    return {
        type: DELETE_JOB,
        input
    }
}