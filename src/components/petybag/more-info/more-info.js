import React, { Component } from 'react';
import "./more-info.scss";
import moreInfoOne from "../../../images/icons/more-info-1.svg";
import moreInfoTwo from "../../../images/icons/more-info-2.svg";
import moreInfoThree from "../../../images/icons/more-info-3.svg";

class MoreInfo extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-more-info">
                    <div className="pb-more-info__label m-bottom--medium">
                        A Petybag Nunca Falha
                    </div>

                    <div className="pb-more-info__sub-label m-bottom--x-large">
                        <div>
                            Cada Petybag é projetada para proporcionar praticidade, conforto e estilo, garantindo que
                        </div>
                        <div>
                            você e seu amado pet tenham a melhor experiência juntos, sempre
                        </div>
                    </div>

                    <div className="pb-more-info__items-wrapper p-top--x-large">
                        <div className="pb-more-info__item-box">
                            <div className="m-bottom--large" horizontal="center">
                                <img src={moreInfoOne} alt="Info img"/>
                            </div>

                            <div className="pb-more-info__item-title m-bottom--small">
                                Coloque o Saquinho
                            </div>

                            <div className="pb-more-info__item-description">
                                Coloque a “petybag” na cauda do seu pet. Ela é tão suave e macia que ele não vai nem sentir
                            </div>
                        </div>

                        <div className="pb-more-info__item-box">
                            <div className="m-bottom--large" horizontal="center">
                                <img src={moreInfoTwo} alt="Info img"/>
                            </div>

                            <div className="pb-more-info__item-title m-bottom--small">
                                Espere com paciência
                            </div>

                            <div className="pb-more-info__item-description">
                                Espere com paciência, ao final já não precisa vigiar mais onde o seu cachorro vai fazer as suas necessidades
                            </div>
                        </div>

                        <div className="pb-more-info__item-box">
                            <div className="m-bottom--large" horizontal="center">
                                <img src={moreInfoThree} alt="Info img"/>
                            </div>

                            <div className="pb-more-info__item-title m-bottom--small">
                                Descarte comurgência
                            </div>

                            <div className="pb-more-info__item-description">
                                Assim que você perceber que o saquinho está cheio é hora de descartar rapidinho na lixeira mais próxima
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoreInfo
