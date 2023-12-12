import React, { Component } from 'react';
import "./comments.scss";
import authorIcon from "../../../images/icons/author-icon.svg";
import petBgrImg from "../../../images/icons/pet-bgr.svg";
import petBgrImgTwo from "../../../images/icons/pet-bgr2.svg";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
};

class Comments extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb">
                    <Slider {...settings} className="pb-comments__slider p-top--x-large">
                        <div>
                            <div vertical="start" className="p-horizontal--small">
                                <div className="pb-comments__pet-img flex-shrink--none m-right--large">
                                    <img alt="Pet background" src={petBgrImgTwo}/>
                                </div>

                                <div className="pb-comments__description-wrapper" direction="column">
                                    <div className="pb-comments__description m-bottom--x-large">
                                        O nosso cão adora os produtos da Petybag! Comprei-lhe comida nova e ela ficou muito entusiasmada. Tenho a certeza de que só oferecem o melhor para os animais de estimação. Obrigado pelo vosso trabalho árduo!
                                    </div>

                                    <div vertical="center">
                                        <div className="m-right--small">
                                            <img alt="Author" className="pb-comments__author-icon" src={authorIcon}/>
                                        </div>

                                        <div>
                                            <div className="pb-comments__author m-bottom--x-small">
                                                Isabella Pereira
                                            </div>
                                            <div className="pb-comments__date">
                                                Jun 16, 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div vertical="start" className="p-horizontal--small">
                                <div className="pb-comments__pet-img flex-shrink--none m-right--large">
                                    <img alt="Pet background" src={petBgrImg}/>
                                </div>

                                <div className="pb-comments__description-wrapper pb-comments__description-wrapper--third" direction="column">
                                    <div className="pb-comments__description m-bottom--x-large">
                                        O nosso cão adora os produtos da Petybag! Comprei-lhe comida nova e ela ficou muito entusiasmada. Tenho a certeza de que só oferecem o melhor para os animais de estimação. Obrigado pelo vosso trabalho árduo!
                                    </div>

                                    <div vertical="center">
                                        <div className="m-right--small">
                                            <img alt="Author" className="pb-comments__author-icon" src={authorIcon}/>
                                        </div>

                                        <div>
                                            <div className="pb-comments__author m-bottom--x-small">
                                                Isabella Pereira
                                            </div>
                                            <div className="pb-comments__date">
                                                Jun 16, 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div vertical="start" className="p-horizontal--small">
                                <div className="pb-comments__pet-img flex-shrink--none m-right--large">
                                    <img alt="Pet background" src={petBgrImg}/>
                                </div>

                                <div className="pb-comments__description-wrapper pb-comments__description-wrapper--second" direction="column">
                                    <div className="pb-comments__description m-bottom--x-large">
                                        O nosso cão adora os produtos da Petybag! Comprei-lhe comida nova e ela ficou muito entusiasmada. Tenho a certeza de que só oferecem o melhor para os animais de estimação. Obrigado pelo vosso trabalho árduo!
                                    </div>

                                    <div vertical="center">
                                        <div className="m-right--small">
                                            <img alt="Author" className="pb-comments__author-icon" src={authorIcon}/>
                                        </div>

                                        <div>
                                            <div className="pb-comments__author m-bottom--x-small">
                                                Isabella Pereira
                                            </div>
                                            <div className="pb-comments__date">
                                                Jun 16, 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Comments
