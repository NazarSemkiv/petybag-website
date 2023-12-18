import React, { Component } from 'react';
import "./payment-total.scss";
import checkEdge from "../../../images/icons/check-edge.svg";
import itemIconOne from "../../../images/icons/item-icon-1.svg";
import itemIconTwo from "../../../images/icons/item-icon-2.svg";
import qrCode from "../../../images/icons/qr-code.svg";
import copyIcon from "../../../images/icons/copy.svg";

class PaymentTotal extends Component {
    constructor(props) {
        super(props);
        this.copyQRCode = this.copyQRCode.bind(this);
        this.handleNextStep = this.handleNextStep.bind(this);
        this.state = {
            qrCode: 'https://www.example.com/r4nd0m5tr1ng',
        };
    }

    copyQRCode() {
        navigator.clipboard.writeText(this.state.qrCode);
    }

    handleNextStep() {
        this.props.nextStep({ selectedOption: null, view: 'tracking' });
    }

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-payment-total" direction="column" vertical="center">
                    <div className="pb-payment-total__title m-bottom--medium">
                        Thank you for your Purchase!
                    </div>

                    <div className="pb-payment-total__sub-label m-bottom--x-large">
                        <div>
                            Hello Enzo Lima Alves,
                        </div>
                        <div>
                            We appreciate you choosing Petybag. Your purchase has been successfully received!
                        </div>
                    </div>

                    <div className="pb-payment-total__label p-top--x-large m-bottom--large">
                        Resumo da encomenda
                    </div>

                    <div className="pb-payment-total__check-wrapper m-bottom--x-large">
                        <img alt="Check top" src={checkEdge} className="pb-payment-total__check-top"/>
                        <img alt="Check top" src={checkEdge} className="pb-payment-total__check-bottom"/>

                        <div horizontal="between">
                            <div direction="column">
                                <div className="pb-payment-total__check-label m-bottom--x-small">
                                    Order Number:
                                </div>
                                <div className="pb-payment-total__check-value">
                                    #786-784-0996
                                </div>
                            </div>

                            <div direction="column" className="p-horizontal--large">
                                <div className="pb-payment-total__check-label m-bottom--x-small">
                                    Order Date:
                                </div>
                                <div className="pb-payment-total__check-value">
                                    04/08/2023
                                </div>
                            </div>

                            <div direction="column">
                                <div className="pb-payment-total__check-label m-bottom--x-small">
                                    Payment Method:
                                </div>
                                <div className="pb-payment-total__check-value">
                                    Pix
                                </div>
                            </div>
                        </div>

                        <div className="pb-payment-total__check-divider m-vertical--x-large"></div>

                        <div vertical="center">
                            <div className="pb-payment-total__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                <img alt="Item" src={itemIconOne}/>
                            </div>

                            <div direction="column" vertical="between">
                                <div className="pb-payment-total__item-name m-bottom--small">Kit inicial</div>

                                <div>
                                    <div vertical="center" className="m-bottom--x-small">
                                        <div className="pb-payment-total__item-attr-name m-right--large">Quantidade:</div>
                                        <div className="pb-payment-total__item-attr-value">1</div>
                                    </div>

                                    <div vertical="center">
                                        <div className="pb-payment-total__item-attr-name m-right--large">Custo:</div>
                                        <div className="pb-payment-total__item-attr-value">R$ 15</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div vertical="center" className="m-top--medium">
                            <div className="pb-payment-total__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                <img alt="Item" src={itemIconTwo}/>
                            </div>

                            <div direction="column" vertical="between">
                                <div className="pb-payment-total__item-name m-bottom--small">Kit inicial</div>

                                <div>
                                    <div vertical="center" className="m-bottom--x-small">
                                        <div className="pb-payment-total__item-attr-name m-right--large">Quantidade:</div>
                                        <div className="pb-payment-total__item-attr-value">1</div>
                                    </div>

                                    <div vertical="center">
                                        <div className="pb-payment-total__item-attr-name m-right--large">Custo:</div>
                                        <div className="pb-payment-total__item-attr-value">R$ 15</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-payment-total__check-divider m-vertical--x-large"></div>

                        <div vertical="center" horizontal="between" className="m-bottom--xx-small">
                            <div className="pb-payment-total__check-value">
                                Entrega
                            </div>
                            <div className="pb-payment-total__check-label">
                                Free
                            </div>
                        </div>

                        <div vertical="center" horizontal="between" className="m-bottom--xx-small">
                            <div className="pb-payment-total__check-value">
                                Subtotal
                            </div>
                            <div className="pb-payment-total__check-label">
                                R$ 43
                            </div>
                        </div>

                        <div vertical="center" horizontal="between">
                            <div className="pb-payment-total__check-value">
                                <b>Total</b>
                            </div>
                            <div className="pb-payment-total__check-value">
                                <b>R$ 43</b>
                            </div>
                        </div>
                    </div>

                    {
                        (this.props.selectedOption === '1') &&
                        <div className="pb-payment-total__label m-bottom--medium">
                            <div>
                                Para efetuar o pagamento, utilize o código
                            </div>
                            <div>
                                QR Pix abaixo:
                            </div>
                        </div>
                    }

                    <div className="pb-payment-total__sub-label m-bottom--x-large">
                        <div className="m-bottom--small">
                            <div>Once we receive payment confirmation, we will send a confirmation to the email</div>
                            <div>[email@email.com.br]</div>
                        </div>
                        <div> Thank you for your trust in our store!</div>
                    </div>

                    {
                        (this.props.selectedOption === '1') &&
                        <div vertical="start" className="pb-payment-total__timer m-bottom--x-large">
                            <div direction="column" vertical="center">
                                <div>14</div>
                                <div className="pb-payment-total__timer-label">Minutos</div>
                            </div>

                            <div className="m-horizontal--small">:</div>

                            <div direction="column" vertical="center">
                                <div>45</div>
                                <div className="pb-payment-total__timer-label">Segundos</div>
                            </div>
                        </div>
                    }

                    {
                        (this.props.selectedOption === '1') &&
                        <div className="pb-payment-total__qr-code-wrapper p-top--x-large m-bottom--x-large">
                            <img className="pb-payment-total__qr-code-img" alt="QR code" src={qrCode}/>
                        </div>
                    }

                    {
                        (this.props.selectedOption === '1') &&
                        <div className="pb-payment-total__qr-input-wrapper p-top--x-large m-bottom--x-large" vertical="end">
                            <div className="pb-input-wrapper m-right--medium flex-grow">
                                <div className="pb-input-label">Código QR para pagamento</div>
                                <input
                                    disabled={true}
                                    value={this.state.qrCode}
                                    className="pb-input"
                                    type="text"
                                />
                            </div>
                            <button
                                className="pb-button pb-button--p-horizontal pb-button--pink pb-button--bordered"
                                type="button"
                            >
                                Copiar código
                                <img
                                    alt="Copy icon"
                                    src={copyIcon}
                                    className="m-left--x-small"
                                    onClick={this.copyQRCode}
                                />
                            </button>
                        </div>
                    }

                    <button
                        className="pb-button pb-button--p-horizontal pb-button--pink"
                        type="button"
                        onClick={this.handleNextStep}
                    >
                        Próximo passo
                    </button>
                </div>
            </div>
        )
    }
}

export default PaymentTotal
