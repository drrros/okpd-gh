import React from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import ResultsTable from './ResultsTable'


const Modal = (props) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={props.modal}
                      toggle={props.toggle}
                      backdrop={true}
                      size="fluid"
                      full-height="false"
                      position="top">
                <MDBModalHeader className="text-center" toggle={props.toggle}>Результаты проверки</MDBModalHeader>
                <MDBModalBody>
                    <ResultsTable processedOkpds={props.processedOkpds}/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={props.toggle}>Закрыть</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}

export default Modal

