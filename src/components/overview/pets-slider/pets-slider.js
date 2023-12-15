import React, { Component } from 'react';
import "./pets-slider.scss";
import Slider from 'react-slick';
import instagramIcon from "../../../images/icons/instagram-icon.svg";
import facebookIcon from "../../../images/icons/facebook-icon.svg";
import petsSlideOne from "../../../images/pets-slider/pets-slide.svg";
import petsSlideTwo from "../../../images/pets-slider/pets-slide2.svg";
import petsSlideThree from "../../../images/pets-slider/pets-slide3.svg";
import petsSlideFour from "../../../images/pets-slider/pets-slide4.svg";
import petsSlideFive from "../../../images/pets-slider/pets-slide5.svg";
import petsSlideSix from "../../../images/pets-slider/pets-slide6.svg";
import petsSlideSeven from "../../../images/pets-slider/pets-slide7.svg";

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

class PetsSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="contact">
                <div vertical="center" horizontal="between" className="p-horizontal--x-large m-bottom--x-large">
                    <div className="pb-slider__text m-left--x-large p-right--large">
                        Inscreva-se para ver mais
                    </div>

                    <div vertical="center" className="m-right--x-large">
                        <a href="" className="pb-display--contents" target="_blank">
                            <button className="pb-button pb-button--icon m-right--x-small" type="button">
                                <img
                                    alt="Facebook icon"
                                    src={facebookIcon}
                                />
                            </button>
                        </a>

                        <a href="" className="pb-display--contents" target="_blank">
                            <button className="pb-button pb-button--icon" type="button">
                                <img
                                    alt="Instagram icon"
                                    src={instagramIcon}
                                />
                            </button>
                        </a>
                    </div>
                </div>

                <div className="m-top--x-large">
                    <Slider {...settings} className="pb-slider p-bottom--x-large">
                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideOne}/>
                        </div>

                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideTwo}/>
                        </div>

                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideThree}/>
                        </div>

                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideFour}/>
                        </div>
                    </Slider>

                    <Slider {...settings} className="pb-slider p-top--x-large">
                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideFive}/>
                        </div>

                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideSix}/>
                        </div>

                        <div horizontal="center" vertical="center" className="p-horizontal--small">
                            <img alt="Pet" src={petsSlideSeven}/>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default PetsSlider
