import React, { Component } from 'react';
import "./text-section.scss";
import textSectionOne from "../../../images/icons/text-section-1.svg";
import textSectionTwo from "../../../images/icons/text-section-2.svg";
import textSectionThree from "../../../images/icons/text-section-3.svg";
import textSectionFour from "../../../images/icons/text-section-4.svg";

class TextSection extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center" className="pb-text-section-petybag">
                <div className="pb pb-text-section">
                    Comodidade Interior e Exterior:
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Pet mini icon"
                            src={textSectionOne}
                            className="pb-text-section__image"
                        />
                    </p>
                    Zero Propagação de Vírus e Bactérias,
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Ecology icon"
                            src={textSectionTwo}
                            className="pb-text-section__image"
                        />
                    </p>
                    Integrado e Confortável,
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Gear icon"
                            src={textSectionThree}
                            className="pb-text-section__image"
                        />
                    </p>
                    Sem Sujeira nem Cheiro. <br/> Além disso, Nossa Abordagem é Sustentável -
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Pet mini icon"
                            src={textSectionFour}
                            className="pb-text-section__image"
                        />
                    </p>
                    100% Biodegradável
                </div>
            </div>
        )
    }
}

export default TextSection
