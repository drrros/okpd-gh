const TOGGLE_MODAL = 'TOGGLE_MODAL'
const TOGGLE_SUBMIT = 'TOGGLE_SUBMIT'
const TOGGLE_CHECK_GROUPS = 'TOGGLE_CHECK_GROUPS'
const FORM_DATA = 'FORM_DATA'
const OKPD_LIST = 'OKPD_LIST'
const SUBMIT_NONVALID_FORM = 'SUBMIT_NONVALID_FORM'
const SUBMIT_VALID_FORM = 'SUBMIT_VALID_FORM'
const CLEAR_FORM = 'CLEAR_FORM'
const HANDLE_RESPONSE = 'HANDLE_RESPONSE'


const initialState = {
    showModal: false,
    formData: '',
    okpdList: [],
    submitButtonDisabled: false,
    checkGroups: false,
    isFetching: false,
    processedOkpds: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_MODAL:
            if (state.showModal) {
                return {
                    ...state, showModal: false, processedOkpds: []
                }
            }else {
                return { ...state,  showModal: true }
            }
        case TOGGLE_SUBMIT:
            return {
                ...state, submitButtonDisabled: action.payload
            }
        case TOGGLE_CHECK_GROUPS:
            return {
                ...state, checkGroups: !state.checkGroups
            }
        case FORM_DATA:
            return {
                ...state, formData: action.payload.substring(0, 40000)
            }
        case OKPD_LIST:
            return {
                ...state, okpdList: action.payload
            }
        case SUBMIT_NONVALID_FORM:
            return {
                ...state,
                formData: '',
                submitButtonDisabled: false
            }
        case SUBMIT_VALID_FORM:
            return {
                ...state,
                okpdList: [...new Set(action.payload)],
                submitButtonDisabled: false
            }
        case CLEAR_FORM:
            return {
                ...state,
                formData: ''
            }
        case HANDLE_RESPONSE:
            return{
                ...state,
                processedOkpds: [...state.processedOkpds, action.payload],
                showModal: true
            }
        default:
            return state
    }
}

export const toggleModalCreator = () => {
    return {
        type: TOGGLE_MODAL
    }
}

export const setSubmitButtonDisabledCreator = (val) => {
    return {
        type: TOGGLE_SUBMIT,
        payload: val
    }
}

export const setCheckGroupsCreator = () => {
    return {
        type: TOGGLE_CHECK_GROUPS
    }
}

export const setFormDataCreator = (event) => {
    return {
        type: FORM_DATA,
        payload: event.target.value
    }
}

export const setOkpdListCreator = (list) => {
    return {
        type: OKPD_LIST,
        payload: list
    }
}

export const onSubmitNonValidFormCreator = () => {
    return {
        type: SUBMIT_NONVALID_FORM,
    }
}

export const onSubmitValidFormCreator = (okpds) => {
    return {
        type: SUBMIT_VALID_FORM,
        payload: okpds
    }
}

export const clearFormDataCreator = () => {
    return {
        type: CLEAR_FORM,
    }
}
export const handleResponseCreator = (response) => {
    return {
        type: HANDLE_RESPONSE,
        payload: response
    }
}


export default reducer
