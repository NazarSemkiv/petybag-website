import React, { Component } from 'react';
import "./intro.scss";
import introImg from "../../../images/icons/intro-img.svg";
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
    autoplaySpeed: 2000,
};

class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div vertical="center" horizontal="center" className="pb-intro-overview">
                <div className="pb pb-intro">
                    <div className="pb-intro__main">
                        <div className="m-bottom--medium">
                            <div className="pb-intro__label">Saquinho</div>

                            <div vertical="center">
                                <div className="pb-intro__label p-right--xx-large">Coletor</div>
                                {/*<div className="p-left--xx-large">*/}
                                {/*    <button*/}
                                {/*        className="pb-button pb-button--large pb-button--bordered"*/}
                                {/*        type="button"*/}
                                {/*    >*/}
                                {/*        Comprar*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className="pb-intro__description m-bottom--x-large">
                            Automático, Descartávele Biodegradável
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
                        src={introImg}
                        className="pb-intro__background-img"
                    />
                </div>
            </div>
        )
    }
}

export default Intro
