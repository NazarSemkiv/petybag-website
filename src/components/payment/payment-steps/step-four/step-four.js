import React, { Component } from 'react';
import "./step-four.scss";
import itemIconOne from "../../../../images/icons/item-icon-1.svg";
import minusIcon from "../../../../images/icons/minus-icon.svg";
import plusIcon from "../../../../images/icons/plus-icon.svg";
import trashIcon from "../../../../images/icons/trash.svg";
import itemIconTwo from "../../../../images/icons/item-icon-2.svg";
import americanExpressCard from "../../../../images/icons/american-express.svg";
import eloCard from "../../../../images/icons/elo-card.svg";
import visaCard from "../../../../images/icons/visa.svg";
import masterCard from "../../../../images/icons/mastercard.svg";
import mobileIcon from "../../../../images/icons/mobile-icon.svg";
import qrcodeIcon from "../../../../images/icons/qrcode-icon.svg";
import completeIcon from "../../../../images/icons/complete-dark-icon.svg";
import shieldIcon from "../../../../images/icons/shield-icon.svg";

class StepFour extends Component {
    constructor(props) {
        super(props);
        this.handleSameAsBilling = this.handleSameAsBilling.bind(this);
        this.state = {
            option: '1',
            sameasbilling: false,
            cardNumber: null,
            expirationDate: null,
            cvc: null,
            cardOwner: null,
            cpf: null,
            personal: null,
            apt: null,
            estado: null,
            zip: null,
            cpfPayment: null,
        };
    }

    handleSameAsBilling() {
        this.setState({
            sameasbilling: !this.state.sameasbilling,
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="step-four">
                    <div className="step-four__wrapper m-bottom--x-large">
                        <div>
                            <div className="m-bottom--x-large step-four__title">
                                Opções de pagamento
                            </div>

                            <div className="m-bottom--medium">
                                <div vertical="center" className="m-bottom--x-large">
                                    <input
                                        className="pb-radio-button"
                                        type="radio"
                                        id="optionone"
                                        name="option"
                                        value="1"
                                        checked={this.state.option === "1"}
                                        onChange={this.handleChange('option')}
                                    />
                                    <label htmlFor="optionone" className="pb-radio-button__label">
                                        Pix
                                        <span className="pb-step-four__discount-text p-left--medium">-10% Desconto</span>
                                    </label>
                                </div>

                                <div vertical="center" className="m-bottom--x-large">
                                    <input
                                        className="pb-radio-button"
                                        type="radio"
                                        id="optiontwo"
                                        name="option"
                                        value="2"
                                        checked={this.state.option === "2"}
                                        onChange={this.handleChange('option')}
                                    />
                                    <label for="optiontwo" className="pb-radio-button__label">
                                        Cartão de crédito
                                    </label>
                                </div>

                                <div vertical="center">
                                    <input
                                        className="pb-radio-button"
                                        type="radio"
                                        id="optionthree"
                                        name="option"
                                        value="3"
                                        checked={this.state.option === "3"}
                                        onChange={this.handleChange('option')}
                                    />
                                    <label for="optionthree" className="pb-radio-button__label">
                                        Cartão de crédito (Endereço de faturação)
                                    </label>
                                </div>
                            </div>

                            <div vertical="center" className="m-bottom--large">
                                <div className="step-four__card-wrapper m-right--medium" vertical="center" horizontal="center">
                                    <img className="step-four__card-icon" alt="Card" src={americanExpressCard}/>
                                </div>

                                <div className="step-four__card-wrapper m-right--medium" vertical="center" horizontal="center">
                                    <img className="step-four__card-icon" alt="Card" src={eloCard}/>
                                </div>

                                <div className="step-four__card-wrapper m-right--medium" vertical="center" horizontal="center">
                                    <img className="step-four__card-icon" alt="Card" src={visaCard}/>
                                </div>

                                <div className="step-four__card-wrapper" vertical="center" horizontal="center">
                                    <img className="step-four__card-icon" alt="Card" src={masterCard}/>
                                </div>
                            </div>

                            {
                                this.state.option === "1" &&
                                <div className="p-top--large">
                                    <div className="step-four__pix-title m-bottom--medium">
                                        Na próxima página, você verá o código QR do PIX e o código PIX para copiar e colar
                                    </div>

                                    <div vertical="center" className="m-bottom--small">
                                        <div className="step-four__icon-wrapper m-right--x-small flex-shrink--none" vertical="center" horizontal="center">
                                            <img alt="Mobile" src={mobileIcon}/>
                                        </div>
                                        <div className="step-four__icon-text">
                                            Abra o seu aplicativo bancário e acesse a área de pagamento PIX
                                        </div>
                                    </div>

                                    <div vertical="center" className="m-bottom--small">
                                        <div className="step-four__icon-wrapper m-right--x-small flex-shrink--none" vertical="center" horizontal="center">
                                            <img alt="QR" src={qrcodeIcon}/>
                                        </div>
                                        <div className="step-four__icon-text">
                                            Confira as informações para garantir que estão corretas e faça o pagamento
                                        </div>
                                    </div>

                                    <div vertical="center">
                                        <div className="step-four__icon-wrapper m-right--x-small flex-shrink--none" vertical="center" horizontal="center">
                                            <img alt="Complete" src={completeIcon}/>
                                        </div>
                                        <div className="step-four__icon-text">
                                            Após o pagamento, o seu pedido será automaticamente gerado e você receberá uma confirmação por e-mail
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                (this.state.option === "2" || this.state.option === "3") &&
                                <div className="p-top--large">
                                    <div className="pb-input-wrapper m-bottom--large">
                                        <div className="pb-input-label">Número do cartão</div>
                                        <input
                                            disabled={false}
                                            value={this.state.cardNumber}
                                            onChange={this.handleChange('cardNumber')}
                                            className="pb-input"
                                            type="number"
                                            placeholder="4111 1111 1111 1111"
                                        />
                                    </div>

                                    <div className="m-bottom--large" vertical="center">
                                        <div className="pb-input-wrapper s-width--1-2 p-right--small">
                                            <div className="pb-input-label">Validade (mês/ano)</div>
                                            <input
                                                disabled={false}
                                                value={this.state.expirationDate}
                                                onChange={this.handleChange('expirationDate')}
                                                className="pb-input"
                                                type="number"
                                            />
                                        </div>

                                        <div className="pb-input-wrapper s-width--1-2 p-left--small">
                                            <div className="pb-input-label">CVC</div>
                                            <input
                                                disabled={false}
                                                value={this.state.cvc}
                                                onChange={this.handleChange('cvc')}
                                                className="pb-input"
                                                type="password"
                                            />
                                        </div>
                                    </div>

                                    <div className="pb-input-wrapper m-bottom--large">
                                        <div className="pb-input-label">Nome e sobrenome do titular</div>
                                        <input
                                            disabled={false}
                                            value={this.state.cardOwner}
                                            onChange={this.handleChange('cardOwner')}
                                            className="pb-input"
                                            type="text"
                                        />
                                    </div>

                                    <div className="pb-input-wrapper m-bottom--large">
                                        <div className="pb-input-label">CPF do titular</div>
                                        <input
                                            disabled={false}
                                            value={this.state.cpf}
                                            onChange={this.handleChange('cpf')}
                                            className="pb-input"
                                            type="text"
                                        />
                                    </div>

                                    {
                                        this.state.option === "3" &&
                                        <div>
                                            <div vertical="center" className="m-bottom--x-large">
                                                <input
                                                    className="pb-radio-button pb-radio-button--checkbox"
                                                    type="checkbox"
                                                    id="sameasbilling"
                                                    name="option"
                                                    value={this.state.sameasbilling}
                                                    checked={this.state.sameasbilling}
                                                    onChange={this.handleSameAsBilling}
                                                />
                                                <label htmlFor="sameasbilling" className="pb-radio-button__label">
                                                    Same as billing address
                                                </label>
                                            </div>

                                            <div className="step-four__title p-top--xx-large m-bottom--x-large">
                                                Endereço de faturação
                                            </div>

                                            <div className="pb-input-wrapper m-bottom--large">
                                                <div className="pb-input-label">Personal*</div>
                                                <input
                                                    disabled={false}
                                                    value={this.state.personal}
                                                    onChange={this.handleChange('personal')}
                                                    className="pb-input"
                                                    type="text"
                                                />
                                            </div>

                                            <div className="pb-input-wrapper m-bottom--large">
                                                <div className="pb-input-label">Apt, Suite, bldg, c/o, (opcional)</div>
                                                <input
                                                    disabled={false}
                                                    value={this.state.apt}
                                                    onChange={this.handleChange('apt')}
                                                    className="pb-input"
                                                    type="text"
                                                />
                                            </div>

                                            <div className="m-bottom--large" vertical="center">
                                                <div className="pb-input-wrapper p-right--small">
                                                    <div className="pb-input-label">Estado*</div>
                                                    <input
                                                        disabled={false}
                                                        value={this.state.estado}
                                                        onChange={this.handleChange('estado')}
                                                        className="pb-input"
                                                        type="text"
                                                    />
                                                </div>

                                                <div className="pb-input-wrapper p-left--small">
                                                    <div className="pb-input-label">ZIP code*</div>
                                                    <input
                                                        disabled={false}
                                                        value={this.state.zip}
                                                        onChange={this.handleChange('zip')}
                                                        className="pb-input"
                                                        type="password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="pb-input-wrapper m-bottom--large">
                                                <div className="pb-input-label">CPF do titular</div>
                                                <input
                                                    disabled={false}
                                                    value={this.state.cpfPayment}
                                                    onChange={this.handleChange('cpfPayment')}
                                                    className="pb-input"
                                                    type="text"
                                                />
                                            </div>

                                            <div vertical="center" className="m-bottom--xx-large">
                                                <div className="step-four__icon-wrapper m-right--x-small flex-shrink--none" vertical="center" horizontal="center">
                                                    <img alt="Shield" src={shieldIcon}/>
                                                </div>
                                                <div className="step-four__icon-text">
                                                    Os seus dados são protegidos e transmitidos de forma encriptada
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>

                        <div>
                            <div className="m-bottom--x-large step-four__title">
                                Resumo da encomenda
                            </div>

                            <div className="step-four__items-wrapper">
                                <div className="m-bottom--x-large">
                                    <div className="step-four__item m-bottom--medium" vertical="start" horizontal="between">
                                        <div vertical="center">
                                            <div className="step-four__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                                <img alt="Item" src={itemIconOne}/>
                                            </div>

                                            <div direction="column" horizontal="between">
                                                <div className="step-four__item-label m-bottom--small">
                                                    Kit inicial
                                                </div>

                                                <div className="m-bottom--x-small" vertical="center">
                                                    <div className="step-four__item-attribute">Quantidade:</div>
                                                    <div className="step-four__item-value" vertical="center">
                                                        <img className="step-four__item-value-action" alt="Minus" src={minusIcon}/>
                                                        <div className="p-horizontal--small">1</div>
                                                        <img className="step-four__item-value-action" alt="Plus" src={plusIcon}/>
                                                    </div>
                                                </div>

                                                <div vertical="center">
                                                    <div className="step-four__item-attribute">Custo:</div>
                                                    <div className="step-four__item-value">R$ 15</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step-four__delete-wrapper">
                                            <img alt="Trash icon" src={trashIcon}/>
                                        </div>
                                    </div>

                                    <div className="step-four__item" vertical="start" horizontal="between">
                                        <div vertical="center">
                                            <div className="step-four__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                                <img alt="Item" src={itemIconTwo}/>
                                            </div>

                                            <div direction="column" horizontal="between">
                                                <div className="step-four__item-label m-bottom--small">
                                                    Kit inicial
                                                </div>

                                                <div className="m-bottom--x-small" vertical="center">
                                                    <div className="step-four__item-attribute">Quantidade:</div>
                                                    <div className="step-four__item-value" vertical="center">
                                                        <img className="step-four__item-value-action" alt="Minus" src={minusIcon}/>
                                                        <div className="p-horizontal--small">1</div>
                                                        <img className="step-four__item-value-action" alt="Plus" src={plusIcon}/>
                                                    </div>
                                                </div>

                                                <div vertical="center">
                                                    <div className="step-four__item-attribute">Custo:</div>
                                                    <div className="step-four__item-value">R$ 28</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step-four__delete-wrapper">
                                            <img alt="Trash icon" src={trashIcon}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="step-four__total-section" vertical="center" horizontal="between">
                                    <div className="step-four__total-label">
                                        Entrega
                                    </div>
                                    <div className="step-four__total-value">
                                        Free
                                    </div>
                                </div>

                                <div className="step-four__total-section" vertical="center" horizontal="between">
                                    <div className="step-four__total-label">
                                        Subtotal
                                    </div>
                                    <div className="step-four__total-value">
                                        R$ 43
                                    </div>
                                </div>

                                <div className="step-four__total-section" vertical="center" horizontal="between">
                                    <div className="step-four__total-label">
                                        Total
                                    </div>
                                    <div className="step-four__total-label">
                                        R$ 43
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div vertical="center" horizontal="between">
                        <button
                            className="pb-button pb-button--p-horizontal pb-button--bordered"
                            type="button"
                            onClick={this.props.nextStep(2)}
                        >
                            Retorno
                        </button>

                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink"
                            type="button"
                            onClick={this.props.optionSelected({ selectedOption: this.state.option, view: 'total' })}
                        >
                            Próximo passo
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepFour
