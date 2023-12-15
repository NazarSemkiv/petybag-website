import React, { Component } from 'react';
import "./step-one.scss";
import trashIcon from "../../../../images/icons/trash.svg";
import itemIconOne from "../../../../images/icons/item-icon-1.svg";
import itemIconTwo from "../../../../images/icons/item-icon-2.svg";
import minusIcon from "../../../../images/icons/minus-icon.svg";
import plusIcon from "../../../../images/icons/plus-icon.svg";
import {Link} from "gatsby";

class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="step-one">
                    <div className="step-one__basket m-bottom--x-large">
                        Cesta (3)
                    </div>

                    <div className="m-bottom--large">
                        <div className="step-one__item" vertical="start" horizontal="between">
                            <div vertical="center">
                                <div className="step-one__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                    <img alt="Item" src={itemIconOne}/>
                                </div>

                                <div direction="column" horizontal="between">
                                    <div className="step-one__item-label m-bottom--small">
                                        Kit inicial
                                    </div>

                                    <div className="m-bottom--x-small" vertical="center">
                                        <div className="step-one__item-attribute">Quantidade:</div>
                                        <div className="step-one__item-value" vertical="center">
                                            <img className="step-one__item-value-action" alt="Minus" src={minusIcon}/>
                                            <div className="p-horizontal--small">1</div>
                                            <img className="step-one__item-value-action" alt="Plus" src={plusIcon}/>
                                        </div>
                                    </div>

                                    <div vertical="center">
                                        <div className="step-one__item-attribute">Custo:</div>
                                        <div className="step-one__item-value">R$ 15</div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-one__delete-wrapper">
                                <img alt="Trash icon" src={trashIcon}/>
                            </div>
                        </div>

                        <div className="step-one__divider m-vertical--large"></div>

                        <div className="step-one__item" vertical="start" horizontal="between">
                            <div vertical="center">
                                <div className="step-one__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                    <img alt="Item" src={itemIconTwo}/>
                                </div>

                                <div direction="column" horizontal="between">
                                    <div className="step-one__item-label m-bottom--small">
                                        Kit inicial
                                    </div>

                                    <div className="m-bottom--x-small" vertical="center">
                                        <div className="step-one__item-attribute">Quantidade:</div>
                                        <div className="step-one__item-value" vertical="center">
                                            <img className="step-one__item-value-action" alt="Minus" src={minusIcon}/>
                                            <div className="p-horizontal--small">1</div>
                                            <img className="step-one__item-value-action" alt="Plus" src={plusIcon}/>
                                        </div>
                                    </div>

                                    <div vertical="center">
                                        <div className="step-one__item-attribute">Custo:</div>
                                        <div className="step-one__item-value">R$ 28</div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-one__delete-wrapper">
                                <img alt="Trash icon" src={trashIcon}/>
                            </div>
                        </div>
                    </div>

                    <div vertical="end" className="m-bottom--large">
                        <div className="pb-input-wrapper flex-grow p-right--medium">
                            <div className="pb-input-label">Código De Desconto</div>
                            <input
                                disabled={false}
                                value={this.state.code}
                                onChange={this.handleChange('code')}
                                className="pb-input"
                                type="text"
                            />
                        </div>

                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink pb-button--bordered"
                            type="button"
                        >
                            Aplicar
                        </button>
                    </div>

                    <div className="m-bottom--x-large">
                        <div className="step-one__total-section" vertical="center" horizontal="between">
                            <div className="step-one__total-label">
                                Entrega
                            </div>
                            <div className="step-one__total-value">
                                Free
                            </div>
                        </div>

                        <div className="step-one__total-section" vertical="center" horizontal="between">
                            <div className="step-one__total-label">
                                Subtotal
                            </div>
                            <div className="step-one__total-value">
                                R$ 43
                            </div>
                        </div>

                        <div className="step-one__total-section" vertical="center" horizontal="between">
                            <div className="step-one__total-label">
                                Total
                            </div>
                            <div className="step-one__total-label">
                                R$ 43
                            </div>
                        </div>
                    </div>

                    <div vertical="center" horizontal="between">
                        <Link to="/">
                            <button
                                className="pb-button pb-button--p-horizontal pb-button--bordered"
                                type="button"
                            >
                                Retorno
                            </button>
                        </Link>

                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink"
                            type="button"
                            onClick={this.props.nextStep(1)}
                        >
                            Próximo passo
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepOne
