import React, { Component } from 'react';
import "./quantidade.scss";
import petyBagItem from "../../../images/icons/petybag-item.svg";
import Slider from "react-slick";
import vectorIcon from "../../../images/icons/vector-icon.svg";

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

class Quantidade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidade: '30',
        };
    }

    handleQuantidadeChange = input => e => {
        this.setState({
            quantidade: input,
        });
    };

    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-quantidade">
                    <div className="pb-quantidade__wrapper">
                        <Slider {...settings} className="pb-quantidade__slider p-top--x-large">
                            <div className="pb-quantidade__slider-wrapper">
                                <div direction="column" vertical="center">
                                    <div className="m-bottom--x-large pb-quantidade__hidden-elements" vertical="center">
                                        <button
                                            className= { this.state.quantidade === "30" ? "pb-quantidade__button m-right--medium pb-quantidade__button--active" : "pb-quantidade__button m-right--medium" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('30')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">30</div>
                                            </div>
                                        </button>

                                        <button
                                            className= { this.state.quantidade === "50" ? "pb-quantidade__button m-right--medium pb-quantidade__button--active" : "pb-quantidade__button m-right--medium" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('50')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">50</div>
                                            </div>
                                        </button>

                                        <button
                                            className= { this.state.quantidade === "100" ? "pb-quantidade__button pb-quantidade__button--active" : "pb-quantidade__button" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('100')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">100</div>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="pb-quantidade__slider-img m-vertical--x-large">
                                        <img alt="Pet background" src={petyBagItem}/>
                                    </div>

                                    <div className="m-top--x-large pb-quantidade__hidden-elements">
                                        <button
                                            className="pb-button pb-button--pink pb-button--p-horizontal"
                                            type="button"
                                        >
                                            Comprar
                                            <img
                                                alt="Vector icon"
                                                src={vectorIcon}
                                                className="m-left--x-small"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-quantidade__slider-wrapper">
                                <div direction="column" vertical="center">
                                    <div className="m-bottom--x-large pb-quantidade__hidden-elements" vertical="center">
                                        <button
                                            className= { this.state.quantidade === "30" ? "pb-quantidade__button m-right--medium pb-quantidade__button--active" : "pb-quantidade__button m-right--medium" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('30')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">30</div>
                                            </div>
                                        </button>

                                        <button
                                            className= { this.state.quantidade === "50" ? "pb-quantidade__button m-right--medium pb-quantidade__button--active" : "pb-quantidade__button m-right--medium" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('50')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">50</div>
                                            </div>
                                        </button>

                                        <button
                                            className= { this.state.quantidade === "100" ? "pb-quantidade__button pb-quantidade__button--active" : "pb-quantidade__button" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('100')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">100</div>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="pb-quantidade__slider-img m-vertical--x-large">
                                        <img alt="Pet background" src={petyBagItem}/>
                                    </div>

                                    <div className="m-top--x-large pb-quantidade__hidden-elements">
                                        <button
                                            className="pb-button pb-button--pink pb-button--p-horizontal"
                                            type="button"
                                        >
                                            Comprar
                                            <img
                                                alt="Vector icon"
                                                src={vectorIcon}
                                                className="m-left--x-small"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-quantidade__slider-wrapper">
                                <div direction="column" vertical="center">
                                    <div className="m-bottom--x-large pb-quantidade__hidden-elements" vertical="center">
                                        <button
                                            className= { this.state.quantidade === "30" ? "pb-quantidade__button m-right--medium pb-quantidade__button--active" : "pb-quantidade__button m-right--medium" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('30')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">30</div>
                                            </div>
                                        </button>

                                        <button
                                            className= { this.state.quantidade === "50" ? "pb-quantidade__button m-right--medium pb-quantidade__button--active" : "pb-quantidade__button m-right--medium" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('50')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">50</div>
                                            </div>
                                        </button>

                                        <button
                                            className= { this.state.quantidade === "100" ? "pb-quantidade__button pb-quantidade__button--active" : "pb-quantidade__button" }
                                            type="button"
                                            onClick={this.handleQuantidadeChange('100')}
                                        >
                                            <div direction="column" vertical="center">
                                                <div className="pb-quantidade__button-label">Quantidade</div>
                                                <div className="pb-quantidade__button-value">100</div>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="pb-quantidade__slider-img m-vertical--x-large">
                                        <img alt="Pet background" src={petyBagItem}/>
                                    </div>

                                    <div className="m-top--x-large pb-quantidade__hidden-elements">
                                        <button
                                            className="pb-button pb-button--pink pb-button--p-horizontal"
                                            type="button"
                                        >
                                            Comprar
                                            <img
                                                alt="Vector icon"
                                                src={vectorIcon}
                                                className="m-left--x-small"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        <div className="pb-quantidade__background-text">
                            Saquinho Coletor
                            &#8226;
                            Saquinho Coletor
                            &#8226;
                            Saquinho Coletor
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quantidade
