import React, { Component } from 'react';
import "./text-section.scss";
import gearIcon from "../../../images/icons/gear-icon.svg";
import ecologyIcon from "../../../images/icons/ecology-icon.svg";
import petMiniIcon from "../../../images/icons/pet-mini.svg";
import petMiniIconTwo from "../../../images/icons/pet-mini2.svg";

class TextSection extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-text-section">
                    Defender a felicidade
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Pet mini icon"
                            src={petMiniIcon}
                            className="pb-text-section__image"
                        />
                    </p>
                    dos animais de estimação:
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Ecology icon"
                            src={ecologyIcon}
                            className="pb-text-section__image"
                        />
                    </p>
                    até 62% mais abanões de cauda. Descubra o mundo
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Gear icon"
                            src={gearIcon}
                            className="pb-text-section__image"
                        />
                    </p>
                    de cuidados e qualidade da
                    <p className="pb-text-section__image-wrapper">
                        <img
                            alt="Pet mini icon"
                            src={petMiniIconTwo}
                            className="pb-text-section__image"
                        />
                    </p>
                    Petybag
                </div>
            </div>
        )
    }
}

export default TextSection
