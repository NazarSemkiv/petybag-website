import React, { Component } from 'react';
import "./qualities.scss";
import qualityIcon from "../../../images/icons/quality.svg";
import qualityIconTwo from "../../../images/icons/quality-two.svg";
import qualityIconThree from "../../../images/icons/quality-three.svg";

class Qualities extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-qualities">
                    <div vertical="start" horizontal="between" className="m-bottom--x-large">
                        <div className="pb-qualities__label">
                            A Petybag Nunca Falha
                        </div>

                        <div className="pb-qualities__description">
                            Cada Petybag é projetada para proporcionar praticidade, conforto e estilo, garantindo que você e seu amado pet tenham a melhor experiência juntos, sempre
                        </div>
                    </div>

                    <div className="pb-qualities__sections-wrapper p-top--x-large">
                        <div className="pb-qualities__section">
                            <div className="pb-qualities__section-img m-bottom--large">
                                <img alt="Quality" src={qualityIcon}/>
                            </div>
                            <div className="pb-qualities__section-title m-bottom--small">
                                Seguro
                            </div>
                            <div className="pb-qualities__section-text">
                                Pague online com total segurança. Os seus dados são protegidos pela nossa politica de privacidade
                            </div>
                        </div>

                        <div className="pb-qualities__section">
                            <div className="pb-qualities__section-img m-bottom--large">
                                <img alt="Quality" src={qualityIconTwo}/>
                            </div>
                            <div className="pb-qualities__section-title m-bottom--small">
                                De voltaao seu bolso!
                            </div>
                            <div className="pb-qualities__section-text">
                                Não ficou contente? Fale conosco e tenha o seu dinheiro de volta na hora, sem burocracia
                            </div>
                        </div>

                        <div className="pb-qualities__section">
                            <div className="pb-qualities__section-img m-bottom--large">
                                <img alt="Quality" src={qualityIconThree}/>
                            </div>
                            <div className="pb-qualities__section-title m-bottom--small">
                                Grátisem 24 horas
                            </div>
                            <div className="pb-qualities__section-text">
                                Não pague nada pelo frete das suas petybags e tenha o envio em 24 horas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Qualities
