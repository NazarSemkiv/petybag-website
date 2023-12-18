import React, { Component } from 'react';
import "./card-refused.scss";
import refusedIcon from "../../../images/icons/refused-icon.svg";

class CardRefused extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pb-card-refused" vertical="center" horizontal="center">
                <div className="pb-card-refused__dialog" direction="column" vertical="center">
                    <img src={refusedIcon} alt="Refused" className="pb-card-refused__img m-bottom--large" />

                    <div className="pb-card-refused__title m-bottom--medium">
                        Card Refused!
                    </div>

                    <div className="pb-card-refused__description m-bottom--x-large">
                        <div>
                            Seu pedido e aceito e está em processamento
                        </div>
                        <div className="pb-card-refused__description--value">
                            FATURA #786-784-0996
                        </div>
                    </div>

                    <div className="s-width--1-1">
                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink s-width--1-1"
                            type="button"
                        >
                            Terminar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardRefused
