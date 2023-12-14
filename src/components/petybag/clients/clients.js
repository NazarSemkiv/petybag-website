import React, { Component } from 'react';
import "./clients.scss";
import petBgrImgTwo from "../../../images/icons/clients-bg-1.svg";
import authorIcon from "../../../images/icons/client-avatar-1.svg";
import petBgrImg from "../../../images/icons/clients-bg-2.svg";
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

class Clients extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb">
                    <div className="pb-clients__sub-label m-bottom--medium">
                        Testemunhos
                    </div>

                    <div className="pb-clients__label m-bottom--x-large">
                        <div>Experiências de patas: O que</div>
                        <div>dizem os nossos clientes</div>
                    </div>

                    <Slider {...settings} className="pb-clients__slider p-top--x-large">
                        <div>
                            <div horizontal="between" className="p-horizontal--small">
                                <div className="pb-clients__pet-img flex-shrink--none m-right--large">
                                    <img alt="Pet background" src={petBgrImgTwo}/>
                                </div>

                                <div className="pb-clients__description-wrapper" direction="column" horizontal="between">
                                    <div className="pb-clients__description m-bottom--x-large">
                                        Absolutely love shopping at Petybag! My cat is thrilled with the new toy I got here. Really satisfied with the product quality and prompt)
                                    </div>

                                    <div vertical="center">
                                        <div className="m-right--small">
                                            <img alt="Author" className="pb-clients__author-icon" src={authorIcon}/>
                                        </div>

                                        <div>
                                            <div className="pb-clients__author m-bottom--x-small">
                                                Lucas Silva
                                            </div>
                                            <div className="pb-clients__date">
                                                August 3, 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div horizontal="between" className="p-horizontal--small">
                                <div className="pb-clients__pet-img flex-shrink--none m-right--large">
                                    <img alt="Pet background" src={petBgrImg}/>
                                </div>

                                <div className="pb-clients__description-wrapper pb-clients__description-wrapper--third" direction="column" horizontal="between">
                                    <div className="pb-clients__description m-bottom--x-large">
                                        Our dog adores Petybag's products! Bought new food from you, and her excitement was beyond words. I'm sure you only offer the best for pets. Thank you for your hard work!
                                    </div>

                                    <div vertical="center">
                                        <div className="m-right--small">
                                            <img alt="Author" className="pb-clients__author-icon" src={authorIcon}/>
                                        </div>

                                        <div>
                                            <div className="pb-clients__author m-bottom--x-small">
                                                Lucas Silva
                                            </div>
                                            <div className="pb-clients__date">
                                                Jun 16, 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div horizontal="between" className="p-horizontal--small">
                                <div className="pb-clients__pet-img flex-shrink--none m-right--large">
                                    <img alt="Pet background" src={petBgrImg}/>
                                </div>

                                <div className="pb-clients__description-wrapper pb-clients__description-wrapper--second" direction="column" horizontal="between">
                                    <div className="pb-clients__description m-bottom--x-large">
                                        Petybag is a gem for me and my cat. Finally found a store that has it all: from food and litter boxes to stylish cat toys. I've been ordering!
                                    </div>

                                    <div vertical="center">
                                        <div className="m-right--small">
                                            <img alt="Author" className="pb-clients__author-icon" src={authorIcon}/>
                                        </div>

                                        <div>
                                            <div className="pb-clients__author m-bottom--x-small">
                                                Lucas Silva
                                            </div>
                                            <div className="pb-clients__date">
                                                May 30, 2023
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

export default Clients
