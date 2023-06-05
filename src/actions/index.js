import axios from "axios";
import { toast } from "react-hot-toast";

export const url = "https://contact.herokuapp.com/contact"
export const LIST_CONTACT = "LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const listContact = () => {
    return (dispatch) => {
        // When Laoding
        dispatch({
            type: LIST_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // When Get Api
        axios({
            method: 'GET',
            url: url,
            timeout: 60000,
        })
        .then((res) => {
            dispatch({
                type: LIST_CONTACT,
                payload: {
                    loading: false,
                    data: res.data.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: LIST_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

    }
}

export const addContact = (data) => {
    return (dispatch) => {
        // When Laoding
        dispatch({
            type: ADD_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // When Get Api
        axios({
            method: 'POST',
            url: url,
            timeout: 60000,
            data
        })
        .then((res) => {
            console.log(res)
            dispatch({
                type: ADD_CONTACT,
                payload: {
                    loading: false,
                    data: res.data.data,
                    errorMessage: false
                }
            })
            toast.success("Data uploaded successfully!!!") 
        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: ADD_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

    }
}

export const detailContact = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_CONTACT,
            payload: {
                data: data,
            }
        })
    }
}

export const updateContact = (data, id) => {
    return (dispatch) => {
        // When Laoding
        dispatch({
            type: UPDATE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // When Get Api
        axios({
            method: 'PUT',
            url: url+'/'+id,
            timeout: 60000,
            data: data
        })
        .then((res) => {
            dispatch({
                type: UPDATE_CONTACT,
                payload: {
                    loading: false,
                    data: res.data.data,
                    errorMessage: false
                }
            })
            toast.success("Data has been updated!!!") 
        })
        .catch((error) => {
            dispatch({
                type: UPDATE_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

    }
}

export const deleteContact = (id) => {
    return (dispatch) => {
        // When Laoding
        dispatch({
            type: DELETE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // When Get Api
        axios({
            method: 'DELETE',
            url: url+'/'+id,
            timeout: 60000,
        })
        .then((res) => {
            dispatch({
                type: DELETE_CONTACT,
                payload: {
                    loading: false,
                    data: res.data.data,
                    errorMessage: false
                }
            })
            toast.success("Data has been deleted!!!") 
        })
        .catch((error) => {
            dispatch({
                type: DELETE_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

    }
}