import React, { Component } from 'react';
import "./info.scss";
import infoOne from "../../../images/icons/info-1.svg";
import infoTwo from "../../../images/icons/info-2.svg";

class PetybagInfo extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center" className="pb-info-petybag">
                <div className="pb pb-info">
                    <div vertical="center" horizontal="between" className="p-bottom--x-large">
                        <div className="pb-info__label">
                            <div>Não temos margem</div>
                            <div>para compromissos</div>
                        </div>
                        <div className="pb-info__description">
                            A atenção ao ambiente é parte integrante da nossa filosofia
                        </div>
                    </div>

                    <div className="pb-info__info-wrapper m-top--x-large">
                        <div>
                            <div>
                                <img className="pb-info__info-item-img m-bottom--large" alt="Img" src={infoOne}/>
                            </div>

                            <div className="pb-info__info-item-label m-bottom--small">
                                Nós usamos plásticos bio-degradáveis!
                            </div>

                            <div className="pb-info__info-item-descr">
                                <div>
                                    Nós usamos plásticos bio-degradáveis!
                                </div>
                                <div>
                                    Usamos plástico muito ecológico para evitar danos ambientais
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img className="pb-info__info-item-img m-bottom--large" alt="Img" src={infoTwo}/>
                            </div>

                            <div className="pb-info__info-item-label m-bottom--small">
                                Como usar Petybag? Fácil como 1-2-3!
                            </div>

                            <div className="pb-info__info-item-descr">
                                <div>
                                    Simplesmente coloque a petybag na cauda do seu cachorro
                                </div>
                                <div>
                                    e descarte quando concluir
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PetybagInfo
