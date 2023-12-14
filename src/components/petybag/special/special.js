import React, { Component } from 'react';
import "./special.scss";
import petyBagItem from "../../../images/icons/petybag-item.svg";
import specialBgr from "../../../images/icons/special-bgr.svg";
import { Link } from "gatsby";

class Special extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="produto" vertical="center" horizontal="center">
                <div className="pb pb-special">
                    {
                        this.props.page === "special-offer" &&
                        <div vertical="center" className="pb-special__navigation m-bottom--x-large">
                            <Link to="/" className="pb-special__navigation-home">
                                Início
                            </Link>

                            <div className="pb-special__navigation-divider m-horizontal--x-small">/</div>

                            <Link to="/special-offer" className="pb-special__navigation-special">
                                Oferta especial
                            </Link>
                        </div>
                    }

                    <div className="pb-special__wrapper" direction="column" vertical="center" horizontal="center">
                        {
                            this.props.page !== "special-offer" &&
                            <img src={specialBgr} alt="Special background" className="pb-special__bgr-img"/>
                        }

                        {
                            this.props.page !== "special-offer" &&
                            <div className="pb-special__sub-label m-bottom--medium">
                                Uma compra favorável
                            </div>
                        }

                        <div className="pb-special__label m-bottom--medium">
                            { this.props.page !== "special-offer" ? "Oferta Especial!" : "Ha sido seleccionado para participar en esta oferta especial!" }
                        </div>

                        <div className="pb-special__sub-label m-bottom--x-large">
                            { this.props.page !== "special-offer" ? "Libere as suas mãos e permita ao seu cão fazer suas necessidades confortavelmente, tanto fora como dentro de casa, sem prejudicar o meio ambiente nem espalhar vírus e bactérias" : "No dejes pasar esta oferta exclusiva y dale a tu mascota lo mejor que se merece!" }
                        </div>

                        <div className="pb-special__item-img-wrapper p-top--x-large" vertical="center">
                            <img src={petyBagItem} alt="Special" className="pb-special__item-img"/>

                            <div direction="column" className="m-left--xx-large">
                                <div className="pb-special__descr m-bottom--small">
                                    <div>Kit inicial Pety bag</div>
                                    <div>
                                        { this.props.page !== "special-offer" ? "+ 60 sacos" : "+ 100 sacos" }
                                    </div>
                                </div>

                                <div vertical="center" className="m-bottom--x-large">
                                    <div vertical="center" className={ this.props.page !== "special-offer" ? "pb-special__descr-value" : "pb-special__descr-value pb-special__descr-value--pink" }>
                                        $147
                                    </div>
                                    {
                                        this.props.page === "special-offer" &&
                                        <div vertical="center" className="pb-special__declined-value m-left--x-small m-top--x-large">
                                            $257
                                        </div>
                                    }
                                </div>

                                <div>
                                    <Link to="/special-offer">
                                        <button
                                            className="pb-button pb-button--pink pb-button--p-horizontal"
                                            type="button"
                                        >
                                            Comprar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Special
