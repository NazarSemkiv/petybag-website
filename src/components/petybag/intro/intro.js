import React, { Component } from 'react';
import "./intro.scss";
import introImg from "../../../images/icons/intro-img2.svg";
import petybagItem from "../../../images/icons/petybag-item.svg";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
};

class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div vertical="center" horizontal="center" className="pb-intro-petybag">
                <div className="pb pb-intro">
                    <div className="pb-intro__main">
                        <div className="m-bottom--medium">
                            <div className="pb-intro__label">Saquinho</div>

                            <div vertical="center">
                                <div className="pb-intro__label">Coletor</div>
                            </div>
                        </div>

                        <div className="pb-intro__description m-bottom--x-large">
                            <div>5 minutos é tudo o que demora para que o seu</div>
                            <div>cão se apaixone totalmente pela “Petybag”</div>
                        </div>

                        <button
                            className="pb-button pb-button--p-horizontal pb-button--pink"
                            type="button"
                        >
                            Comprar
                        </button>
                    </div>

                    <div vertical="center" className="pb-intro__slider-wrapper">
                        <Slider {...settings} className="pb-intro__slider">
                            <div className="p-horizontal--large">
                                <div horizontal="center" vertical="center">
                                    <div className="pb-intro__slide-text m-right--xx-large">Automático</div>
                                    <div className="pb-intro__slide-divider"></div>
                                </div>
                            </div>

                            <div className="p-horizontal--large">
                                <div horizontal="center" vertical="center">
                                    <div className="pb-intro__slide-text m-right--xx-large">Descartávele</div>
                                    <div className="pb-intro__slide-divider"></div>
                                </div>
                            </div>

                            <div className="p-horizontal--large">
                                <div horizontal="center" vertical="center">
                                    <div className="pb-intro__slide-text m-right--xx-large">Biodegradável</div>
                                    <div className="pb-intro__slide-divider"></div>
                                </div>
                            </div>

                            <div className="p-horizontal--large">
                                <div horizontal="center" vertical="center">
                                    <div className="pb-intro__slide-text m-right--xx-large">Mecanizado</div>
                                    <div className="pb-intro__slide-divider"></div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <img
                        alt="Background"
                        src={petybagItem}
                        className="pb-intro__background-img pb-intro__background-img--item"
                    />
                    <img
                        alt="Background"
                        src={introImg}
                        className="pb-intro__background-img"
                    />
                </div>
            </div>
        )
    }
}

export default Intro
