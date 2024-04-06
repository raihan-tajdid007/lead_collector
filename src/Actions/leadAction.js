import * as api from "../api/index.js";
import { CREATE_LEAD } from "../constant/actionTypes";

export const createLead = (leadData) => async (dispatch) => {
    try {
        const { data } = await api.createLead(leadData);
        dispatch({ type: CREATE_LEAD, payload: data });
        console.log("lead created successfully", "data is ", data)
    } catch (error) {
        console.log(error)
    }
}


export const getAllLead = () => async (dispatch) => {
    try {

    } catch (error) {
        console.log(error)
    }
}