import React, { Component } from 'react';
import "./contacts.scss"
import dogIcon from "../../../images/icons/dog-icon.svg";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    onSubmit = event => {
        // submit action
        console.log('this.state', this.state);
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        return (
            <div id="pedido" className="pb-contacts" vertical="start">
                <div className="s-width--1-2 p-right--x-large">
                    <img
                        alt="Dog icon"
                        src={dogIcon}
                        className="pb-contacts__dog-icon m-bottom--x-large"
                    />
                    <div className="pb-contacts__label m-bottom--medium">Enviar pedido</div>
                    <div className="pb-contacts__description">
                        Na Petty bag, o nosso amor pelos animais impulsiona tudo o que fazemos. Somos mais do que apenas uma loja – somos uma comunidade apaixonada dedicada ao bem-estar e à felicidade dos seus companheiros peludos
                    </div>
                </div>

                <form
                    className="s-width--1-2 p-left--x-large"
                    onSubmit={this.onSubmit}
                >
                    <div className="pb-input-wrapper m-bottom--large flex-grow">
                        <div className="pb-input-label">Nome</div>
                        <input
                            disabled={false}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            className="pb-input"
                            type="text"
                        />
                    </div>

                    <div className="pb-input-wrapper m-bottom--large flex-grow">
                        <div className="pb-input-label">E-mail</div>
                        <input
                            disabled={false}
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            className="pb-input"
                            type="email"
                        />
                    </div>

                    <div className="pb-input-wrapper m-bottom--x-large flex-grow">
                        <div className="pb-input-label">Sua mensagem</div>
                        <input
                            disabled={false}
                            value={this.state.message}
                            onChange={this.handleChange('message')}
                            className="pb-input"
                            type="text"
                        />
                    </div>

                    <button
                        className="pb-button pb-button--p-horizontal pb-button--pink"
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default Contacts
