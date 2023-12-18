import React, { Component } from 'react';
import "./tracking.scss";
import completeIconWhite from "../../../images/icons/complete-icon-white.svg";
import itemIconOne from "../../../images/icons/item-icon-1.svg";
import itemIconTwo from "../../../images/icons/item-icon-2.svg";

class Tracking extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        steps: [
            {
                id: 0,
                isActive: true,
            },
            {
                id: 1,
                isActive: true,
            },
            {
                id: 2,
                isActive: true,
            },
            {
                id: 3,
                isActive: false,
            },
        ],
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-tracking">
                    <div className="pb-tracking__title m-bottom--x-large">
                        Rastrear pedido
                    </div>

                    <div className="p-top--x-large" vertical="end">
                        <div vertical="start" className="p-right--xx-large">
                            <div className="pb-tracking__steps" vertical="start">
                                <div className="m-right--large" direction="column">
                                    <div className={ this.state.steps[0].isActive ? "pb-tracking__step-badge pb-tracking__step-badge--active" : "pb-tracking__step-badge" } vertical="center" horizontal="center">
                                        <img alt="Complete icon" className="pb-tracking__step-badge-icon" src={completeIconWhite}/>
                                    </div>

                                    <div className="pb-tracking__step-divider"></div>

                                    <div className={ this.state.steps[1].isActive ? "pb-tracking__step-badge pb-tracking__step-badge--active" : "pb-tracking__step-badge" } vertical="center" horizontal="center">
                                        <img alt="Complete icon" className="pb-tracking__step-badge-icon" src={completeIconWhite}/>
                                    </div>

                                    <div className="pb-tracking__step-divider"></div>

                                    <div className={ this.state.steps[2].isActive ? "pb-tracking__step-badge pb-tracking__step-badge--active" : "pb-tracking__step-badge" } vertical="center" horizontal="center">
                                        <img alt="Complete icon" className="pb-tracking__step-badge-icon" src={completeIconWhite}/>
                                    </div>

                                    <div className="pb-tracking__step-divider"></div>

                                    <div className={ this.state.steps[3].isActive ? "pb-tracking__step-badge pb-tracking__step-badge--active" : "pb-tracking__step-badge" } vertical="center" horizontal="center">
                                        <img alt="Complete icon" className="pb-tracking__step-badge-icon" src={completeIconWhite}/>
                                    </div>
                                </div>

                                <div direction="column">
                                    <div className={ this.state.steps[0].isActive ? "pb-tracking__step-badge-text pb-tracking__step-badge-text--active" : "pb-tracking__step-badge-text" }>
                                        Pedido criado
                                    </div>

                                    <div className={ this.state.steps[1].isActive ? "pb-tracking__step-badge-text pb-tracking__step-badge-text--active" : "pb-tracking__step-badge-text" }>
                                        Pagamento aceitado
                                    </div>

                                    <div className={ this.state.steps[2].isActive ? "pb-tracking__step-badge-text pb-tracking__step-badge-text--active" : "pb-tracking__step-badge-text" }>
                                        <div>Enviado</div>
                                        <div vertical="center">
                                            <div className="pb-tracking__step-track m-right--small">
                                                Rastrear ->
                                            </div>
                                            <div className="pb-tracking__step-track-number" vertical="center" horizontal="center">
                                                AX460354BR
                                            </div>
                                        </div>
                                    </div>

                                    <div className={ this.state.steps[3].isActive ? "pb-tracking__step-badge-text pb-tracking__step-badge-text--active" : "pb-tracking__step-badge-text" }>
                                        Entregue
                                    </div>
                                </div>
                            </div>

                            <div className="pb-tracking__info">
                                <div className="pb-tracking__info-title">
                                    Fatura #786-784-0996
                                </div>

                                <div className="pb-tracking__info-sub-title m-bottom--xx-large">
                                    Enviado - AX460354BR
                                </div>

                                <div className="m-bottom--large">
                                    <div className="pb-tracking__info-label">
                                        Partida em
                                    </div>
                                    <div className="pb-tracking__info-value">
                                        Sept 16, 2023
                                    </div>
                                </div>

                                <div className="m-bottom--large">
                                    <div className="pb-tracking__info-label">
                                        Endereco de entrega
                                    </div>
                                    <div className="pb-tracking__info-value">
                                        Brazil, Rua Frederico Albuquerque, 100 - Vila Paranaguá
                                    </div>
                                </div>

                                <div>
                                    <div className="pb-tracking__info-label">
                                        Data de entrega
                                    </div>
                                    <div className="pb-tracking__info-value">
                                        Sept 22, 2023
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-tracking__item-wrapper flex-grow">
                            <div vertical="center" className="m-bottom--large">
                                <div className="pb-tracking__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                    <img alt="Item" src={itemIconOne}/>
                                </div>
                                <div>
                                    <div className="pb-tracking__item-title m-bottom--xx-small">Kit inicial</div>
                                    <div className="pb-tracking__item-value">
                                        R$ 15 x 1 = <span className="pb-tracking__item-value-number p-left--x-small">R$ 15</span>
                                    </div>
                                </div>
                            </div>

                            <div vertical="center" className="m-bottom--large">
                                <div className="pb-tracking__item-img-wrapper m-right--large" vertical="center" horizontal="center">
                                    <img alt="Item" src={itemIconTwo}/>
                                </div>
                                <div>
                                    <div className="pb-tracking__item-title m-bottom--xx-small">Kit inicial</div>
                                    <div className="pb-tracking__item-value">
                                        R$ 28 x 1 = <span className="pb-tracking__item-value-number p-left--x-small">R$ 15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tracking
