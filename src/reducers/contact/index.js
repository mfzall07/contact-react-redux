import { LIST_CONTACT, ADD_CONTACT, DETAIL_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "../../actions";

const initialState = {
    listContactResult: false,
    listContactLoading: false,
    listContactError: false,

    addContactResult: false,
    addContactLoading: false,
    addContactError: false,

    detailContactResult: false,

    updateContactResult: false,
    updateContactLoading: false,
    updateContactError: false,

    deleteContactResult: false,
    deleteContactLoading: false,
    deleteContactError: false,
}

const contact = (state = initialState, action) => {
    switch(action.type) {
        case LIST_CONTACT:
            return {
                ...state,
                listContactResult: action.payload.data,
                listContactLoading: action.payload.loading,
                listContactError: action.payload.errorMessage
            }
        case ADD_CONTACT:
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading: action.payload.loading,
                addContactError: action.payload.errorMessage
            }
        case DETAIL_CONTACT:
            return {
                ...state,
                detailContactResult: action.payload.data,
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                udpateContactResult: action.payload.data,
                udpateContactLoading: action.payload.loading,
                udpateContactError: action.payload.errorMessage
            }
        case DELETE_CONTACT:
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading: action.payload.loading,
                deleteContactError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default contact