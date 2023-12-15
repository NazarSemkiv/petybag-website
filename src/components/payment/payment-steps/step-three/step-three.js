import React, { Component } from 'react';
import "./step-three.scss";
import countryIcon from "../../../../images/icons/brazil-icon.svg";

class StepThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cep: '',
            address: '',
            street: '',
            buildingNumber: '',
            addition: '',
        };
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="step-three">
                    <div className="step-three__title m-bottom--x-large">
                        Endereço de entrega
                    </div>

                    <div vertical="center" className="m-bottom--large">
                        <div className="pb-input-wrapper step-three__cep">
                            <div className="pb-input-label">CEP</div>
                            <input
                                disabled={false}
                                value={this.state.cep}
                                onChange={this.handleChange('cep')}
                                className="pb-input"
                                type="text"
                            />
                        </div>

                        <div className="m-left--medium m-top--x-large step-three__cep-sub-text">
                            São Roque / SP
                        </div>
                    </div>

                    <div className="pb-input-wrapper m-bottom--large">
                        <img
                            alt="Country"
                            src={countryIcon}
                            className="pb-input-icon pb-input-icon--left pb-input-icon--country"
                        />
                        <div className="pb-input-label">Endereço</div>
                        <input
                            disabled={false}
                            value={this.state.address}
                            onChange={this.handleChange('address')}
                            className="pb-input pb-input--with-icon"
                            type="text"
                        />
                    </div>

                    <div vertical="center" className="m-bottom--large">
                        <div className="pb-input-wrapper s-width--1-2 p-right--small">
                            <div className="pb-input-label">Nome da rua</div>
                            <input
                                disabled={false}
                                value={this.state.street}
                                onChange={this.handleChange('street')}
                                className="pb-input"
                                type="text"
                            />
                        </div>

                        <div className="pb-input-wrapper s-width--1-2 p-left--small">
                            <div className="pb-input-label">Número da casa</div>
                            <input
                                disabled={false}
                                value={this.state.buildingNumber}
                                onChange={this.handleChange('buildingNumber')}
                                className="pb-input"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="pb-input-wrapper m-bottom--x-large">
                        <div className="pb-input-label">
                            Complemento <span className="pb-input-label--sub">(optional)</span>
                        </div>
                        <input
                            disabled={false}
                            value={this.state.addition}
                            onChange={this.handleChange('addition')}
                            className="pb-input"
                            type="text"
                        />
                    </div>

                    <div vertical="center" horizontal="between">
                        <button
                            className="pb-button pb-button--p-horizontal pb-button--bordered"
                            type="button"
                            onClick={this.props.nextStep(1)}
                        >
                            Retorno
                        </button>

                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink"
                            type="button"
                            onClick={this.props.nextStep(3)}
                        >
                            Próximo passo
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepThree
