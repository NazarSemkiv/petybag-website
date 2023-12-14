import React, { Component } from 'react';
import "./faq.scss";
import faqImg from "../../../images/icons/faq-img.svg";
import vectorIcon from "../../../images/icons/vector-icon.svg";
import plusIcon from "../../../images/icons/plus-icon.svg";
import minusIcon from "../../../images/icons/minus-icon.svg";

class Faq extends Component {
    state = {
        frequentlyAskedQuestions: [
            {
                id: "0",
                isCollapsed: false,
            },
            {
                id: "1",
                isCollapsed: false,
            },
            {
                id: "2",
                isCollapsed: false,
            },
            {
                id: "3",
                isCollapsed: false,
            },
            {
                id: "4",
                isCollapsed: false,
            },
        ],
    };

    onToggle = (position) => e => {
        if (position !== null && position !== undefined) {
            let items = [...this.state.frequentlyAskedQuestions];
            let item = {
                ...items[position],
                isCollapsed: !items[position].isCollapsed,
            };
            items[position] = item;
            this.setState({frequentlyAskedQuestions: items});
        }
    };
    render() {
        return (
            <div id="faqs" vertical="center" horizontal="center">
                <div className="pb pb-faq">
                    <div vertical="start" horizontal="between">
                        <div className="m-right--x-large" direction="column" horizontal="between">
                            <div className="pb-faq__title">Alguma pergunta?</div>

                            <div direction="column">
                                <div className="pb-faq__img">
                                    <img alt="FAQ img" src={faqImg}/>
                                </div>

                                <div className="pb-faq__text m-top--x-large">
                                    <div>Tem mais perguntas?</div>
                                    <div>Entre em contato conosco</div>
                                </div>

                                <div className="m-top--x-large">
                                    <a
                                        href=""
                                        target="_blank"
                                    >
                                        <button
                                            className="pb-button pb-button--pink pb-button--p-horizontal"
                                            type="button"
                                        >
                                            WhatsApp
                                            <img
                                                alt="Vector icon"
                                                src={vectorIcon}
                                                className="m-left--x-small"
                                            />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pb-faq__faq-wrapper m-left--x-large">
                            <div
                                className="pb-faq__item-container"
                                onClick={this.onToggle(0)}
                                onKeyPress={this.onToggle(0)}
                            >
                                <div vertical="center" horizontal="between">
                                    <div className="pb-faq__item-label p-right--medium">
                                        Quais são as vantagens de possuir um animal de estimação?
                                    </div>
                                    <div>
                                        { this.state.frequentlyAskedQuestions[0].isCollapsed ?
                                            <img className="pb-faq__item-switcher" src={minusIcon} alt="Minus"/>
                                            : <img className="pb-faq__item-switcher" src={plusIcon} alt="Plus"/>
                                        }
                                    </div>
                                </div>

                                { this.state.frequentlyAskedQuestions[0].isCollapsed &&
                                    <div className="pb-faq__item-descr m-top--x-small">
                                        A escolha do alimento depende da idade, raça e características do seu animal. É melhor consultar um veterinário para determinar o tipo adequado de nutrição e marca
                                    </div>
                                }
                            </div>

                            <div className="pb-faq__item-divider"></div>

                            <div
                                className="pb-faq__item-container"
                                onClick={this.onToggle(1)}
                                onKeyPress={this.onToggle(1)}
                            >
                                <div vertical="center" horizontal="between">
                                    <div className="pb-faq__item-label p-right--medium">
                                        Qual é a melhor escolha para o meu animal de estimação?
                                    </div>
                                    <div>
                                        { this.state.frequentlyAskedQuestions[0].isCollapsed ?
                                            <img className="pb-faq__item-switcher" src={minusIcon} alt="Minus"/>
                                            : <img className="pb-faq__item-switcher" src={plusIcon} alt="Plus"/>
                                        }
                                    </div>
                                </div>

                                { this.state.frequentlyAskedQuestions[1].isCollapsed &&
                                    <div className="pb-faq__item-descr m-top--x-small">
                                        A escolha do alimento depende da idade, raça e características do seu animal. É melhor consultar um veterinário para determinar o tipo adequado de nutrição e marca
                                    </div>
                                }
                            </div>

                            <div className="pb-faq__item-divider"></div>

                            <div
                                className="pb-faq__item-container"
                                onClick={this.onToggle(2)}
                                onKeyPress={this.onToggle(2)}
                            >
                                <div vertical="center" horizontal="between">
                                    <div className="pb-faq__item-label p-right--medium">
                                        Como criar um espaço seguro para o seu animal de estimação em casa?
                                    </div>
                                    <div>
                                        { this.state.frequentlyAskedQuestions[0].isCollapsed ?
                                            <img className="pb-faq__item-switcher" src={minusIcon} alt="Minus"/>
                                            : <img className="pb-faq__item-switcher" src={plusIcon} alt="Plus"/>
                                        }
                                    </div>
                                </div>

                                { this.state.frequentlyAskedQuestions[2].isCollapsed &&
                                    <div className="pb-faq__item-descr m-top--x-small">
                                        A escolha do alimento depende da idade, raça e características do seu animal. É melhor consultar um veterinário para determinar o tipo adequado de nutrição e marca
                                    </div>
                                }
                            </div>

                            <div className="pb-faq__item-divider"></div>

                            <div
                                className="pb-faq__item-container"
                                onClick={this.onToggle(3)}
                                onKeyPress={this.onToggle(3)}
                            >
                                <div vertical="center" horizontal="between">
                                    <div className="pb-faq__item-label p-right--medium">
                                        Como ensinar seu animal de estimação comandos?
                                    </div>
                                    <div>
                                        { this.state.frequentlyAskedQuestions[0].isCollapsed ?
                                            <img className="pb-faq__item-switcher" src={minusIcon} alt="Minus"/>
                                            : <img className="pb-faq__item-switcher" src={plusIcon} alt="Plus"/>
                                        }
                                    </div>
                                </div>

                                { this.state.frequentlyAskedQuestions[3].isCollapsed &&
                                    <div className="pb-faq__item-descr m-top--x-small">
                                        A escolha do alimento depende da idade, raça e características do seu animal. É melhor consultar um veterinário para determinar o tipo adequado de nutrição e marca
                                    </div>
                                }
                            </div>

                            <div className="pb-faq__item-divider"></div>

                            <div
                                className="pb-faq__item-container"
                                onClick={this.onToggle(4)}
                                onKeyPress={this.onToggle(4)}
                            >
                                <div vertical="center" horizontal="between">
                                    <div className="pb-faq__item-label p-right--medium">
                                        Como manter a saúde do seu animal de estimação?
                                    </div>
                                    <div>
                                        { this.state.frequentlyAskedQuestions[0].isCollapsed ?
                                            <img className="pb-faq__item-switcher" src={minusIcon} alt="Minus"/>
                                            : <img className="pb-faq__item-switcher" src={plusIcon} alt="Plus"/>
                                        }
                                    </div>
                                </div>

                                { this.state.frequentlyAskedQuestions[4].isCollapsed &&
                                    <div className="pb-faq__item-descr m-top--x-small">
                                        A escolha do alimento depende da idade, raça e características do seu animal. É melhor consultar um veterinário para determinar o tipo adequado de nutrição e marca
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq
