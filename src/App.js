import React, {useEffect} from "react";
import "./index.css";
import OkpdForm from "./components/OkpdForm";
import Modal from "./components/Modal";
import {connect} from 'react-redux'
import {
    clearFormDataCreator, handleResponseCreator,
    onSubmitNonValidFormCreator,
    onSubmitValidFormCreator,
    setCheckGroupsCreator,
    setFormDataCreator, setOkpdListCreator,
    setSubmitButtonDisabledCreator,
    toggleModalCreator
} from "./redux/reducer";
import * as axios from "axios";


function App({okpdList, ...props}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        let regex = /\d\d\.\d\d\.\d\d\.\d\d\d/g
        if (props.checkGroups) {
            regex = /\d\d\.\d\d\.\d\d/g
        }
        const okpds = props.formData.match(regex)
        if (!okpds) {
            props.handleNonValidSubmit()
        } else {
            props.handleValidSubmit(okpds)
        }
    }

    useEffect(() => {
        okpdList.forEach(okpd => fetchCodeInfo(okpd))
    }, [okpdList]);

    async function fetchCodeInfo(okpd) {
        try {
            const response = await axios.post('https://okpd-api.drros.ru/api/v1/', {okpd})
            props.handleResponse(response)
        } catch (error) {
            props.handleResponse({
                data: {
                    okpd,
                    ktru_records_count: 'Ошибка получения данных с сервера',
                    isCanceled: false,
                    zapret: '0',
                    ogranichenia: '0',
                    preimuschestvo: '0',
                    dopusk: '0',
                    perechen: '0',
                    forma: '0',
                    tk: '0',
                    efektivnost: '0',
                    perechenTryUIS: '0',
                    nepubl: '0',
                }
            })
        }
    }

    return (
        <React.Fragment>
            <OkpdForm
                formData={props.formData}
                setFormData={props.setFormData}
                toggle={props.toggle}
                setOkpdList={props.setOkpdList}
                submitButtonDisabled={props.submitButtonDisabled}
                handleSubmit={handleSubmit}
                handleInput={props.setFormData}
                setCheckGroups={props.setCheckGroups}
                checkGroups={props.checkGroups}
                clearFormData={props.clearFormData}
                setSubmitButtonDisabled={props.setSubmitButtonDisabled}
            />
            {props.showModal ?
                <Modal
                    modal={props.showModal}
                    toggle={props.toggle}
                    processedOkpds={props.processedOkpds}
                />
                : null}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        showModal: state.showModal,
        submitButtonDisabled: state.submitButtonDisabled,
        checkGroups: state.checkGroups,
        formData: state.formData,
        okpdList: state.okpdList,
        processedOkpds: state.processedOkpds,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggleModalCreator()),
        setSubmitButtonDisabled: (val) => dispatch(setSubmitButtonDisabledCreator(val)),
        setCheckGroups: () => dispatch(setCheckGroupsCreator()),
        setFormData: (text) => dispatch(setFormDataCreator(text)),
        setOkpdList: (list) => dispatch(setOkpdListCreator(list)),
        handleNonValidSubmit: () => dispatch(onSubmitNonValidFormCreator()),
        handleValidSubmit: (okpds) => dispatch(onSubmitValidFormCreator(okpds)),
        clearFormData: () => dispatch(clearFormDataCreator()),
        handleResponse: (response) => dispatch(handleResponseCreator(response))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
