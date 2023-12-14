import React, { Component } from 'react';
import "./care.scss";
import ourStoryImg from "../../../images/icons/our-story-img.svg";
import vectorIcon from "../../../images/icons/vector-icon.svg";

class Care extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-care">
                    <div className="pb-care__wrapper">
                        <div>
                            <div className="pb-care__sub-label m-bottom--xx-small">
                                Our Story
                            </div>

                            <div className="pb-care__label m-bottom--medium">
                                Eleve o cuidado com animais de estimação com a Petybag
                            </div>

                            <div className="pb-care__description m-bottom--x-large">
                                Descubra um mundo de cuidados, qualidade e alegria sem limites com a Petybag. Desde guloseimas nutritivas a refúgios acolhedores, dedicamo-nos a melhorar a vida dos seus companheiros peludos. Junte-se a nós para celebrar o amor e a felicidade que os animais de estimação trazem às nossas vidas, um momento de alegria de cada vez
                            </div>

                            <div>
                                <button
                                    className="pb-button pb-button--pink pb-button--p-horizontal"
                                    type="button"
                                >
                                    Aplicar
                                </button>
                            </div>
                        </div>

                        <div>
                            <img src={ourStoryImg} alt="Img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Care
