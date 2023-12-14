import React, { Component } from 'react';
import "./info.scss";
import infoOneIcon from "../../../images/icons/info-one.svg";
import infoTwoIcon from "../../../images/icons/info-two.svg";

class Info extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div vertical="center" horizontal="center" className="pb-info-overview">
                <div className={ this.props.page === "petybag" ? "pb pb-info pb-info--petybag" : "pb pb-info" }>
                    <div className="pb-info__wrapper">
                        <div className="pb-info__section" direction="column" vertical="center">
                            <img className="pb-info__img m-bottom--x-large" alt="Info" src={infoOneIcon}/>
                            <div className="pb-info__label m-bottom--small">
                                Frete grátis para todo o mundo
                            </div>
                            <div className="pb-info__description m-bottom--x-large">
                                Zero Propagação de Vírus e Bactérias, Integrado e Confortável, Sem Sujeira nem Cheiro. Além disso, Nossa Abordagem é Sustentável - 100% Biodegradável
                            </div>
                        </div>

                        <div className="pb-info__section" direction="column" vertical="center">
                            <img className="pb-info__img m-bottom--x-large" alt="Info" src={infoTwoIcon}/>
                            <div className="pb-info__label m-bottom--small">
                                Pagamento em 10x sem juros
                            </div>
                            <div className="pb-info__description m-bottom--x-large">
                                Conveniência Financeira: Divida seu pagamento em 10 vezes sem juros. Faça suas compras com tranquilidade e flexibilidade
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
