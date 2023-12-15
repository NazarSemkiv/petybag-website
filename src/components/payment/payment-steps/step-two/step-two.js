import React, { Component } from 'react';
import "./step-two.scss";
import {Link} from "gatsby";

class StepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
        };
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="step-two">
                    <div className="step-two__title m-bottom--x-large">
                        Dados pessoais
                    </div>

                    <div className="step-two__form m-bottom--x-large">
                        <div className="pb-input-wrapper">
                            <div className="pb-input-label">Nome</div>
                            <input
                                disabled={false}
                                value={this.state.firstname}
                                onChange={this.handleChange('firstname')}
                                className="pb-input"
                                type="text"
                            />
                        </div>

                        <div className="pb-input-wrapper">
                            <div className="pb-input-label">Apelido</div>
                            <input
                                disabled={false}
                                value={this.state.lastname}
                                onChange={this.handleChange('lastname')}
                                className="pb-input"
                                type="text"
                            />
                        </div>

                        <div className="pb-input-wrapper">
                            <div className="pb-input-label">E-mail</div>
                            <input
                                disabled={false}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                className="pb-input"
                                type="email"
                            />
                        </div>

                        <div className="pb-input-wrapper">
                            <div className="pb-input-label">Celular</div>
                            <input
                                disabled={false}
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                                className="pb-input"
                                type="text"
                                placeholder="+55"
                            />
                        </div>
                    </div>

                    <div vertical="center" horizontal="between">
                        <button
                            className="pb-button pb-button--p-horizontal pb-button--bordered"
                            type="button"
                            onClick={this.props.nextStep(0)}
                        >
                            Retorno
                        </button>

                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink"
                            type="button"
                            onClick={this.props.nextStep(2)}
                        >
                            Próximo passo
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepTwo
