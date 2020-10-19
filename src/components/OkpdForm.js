import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";

const OkpdForm = (props) => {

    let btn = (<MDBBtn className="btn btn-outline-blue mt-3" type="submit">
        Проверить
        <MDBIcon far icon="paper-plane" className="ml-2"/>
    </MDBBtn>)
    if (props.submitButtonDisabled) {
        btn = (<MDBBtn className="btn btn-outline-blue mt-3" type="submit" disabled={true}>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Проверка...
        </MDBBtn>)
    }
    return (
        <MDBContainer>
            <MDBRow center style={{height: "100vh"}}>
                <MDBCol middle={true} sm="8" className="text-center">
                    <MDBCard>
                        <MDBCardBody>
                            <form onSubmit={props.handleSubmit}>
                                <legend className="border-bottom mb-4 text-center">Проверка ОКПД</legend>
                                <div className="py-4 mt-3">
                                    <div className="text-left">
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="checkGroups"
                                                checked={props.checkGroups}
                                                onChange={props.setCheckGroups}
                                            />
                                            <label className="custom-control-label mb-2" htmlFor="checkGroups">
                                                Проверять группы, а не коды (ХХ.ХХ.ХХ вместо ХХ.ХХ.ХХ.ХХХ)
                                            </label>
                                        </div>

                                        <label htmlFor="okpdTextarea">
                                            Введите список кодов:
                                        </label>
                                    </div>
                                    <textarea
                                        className="form-control"
                                        id="okpdTextarea"
                                        rows="15"
                                        onChange={props.handleInput}
                                        value={props.formData}
                                    />
                                    <MDBRow center>
                                        {btn}
                                        <MDBBtn className="btn btn-outline-blue mt-3" onClick={() => {
                                            props.clearFormData()
                                            props.setSubmitButtonDisabled(false)
                                        }}>
                                            Очистить форму
                                            <MDBIcon icon="eraser" className="ml-2"/>
                                        </MDBBtn>

                                    </MDBRow>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default OkpdForm;