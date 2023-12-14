import React, { Component } from 'react';
import "./footer.scss"
import vectorIcon from "../../../images/icons/vector-icon.svg";
import {Link} from "gatsby";
import Contacts from "../contacts/contacts";
import PetsSlider from "../../overview/pets-slider/pets-slider";
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer vertical="center" horizontal="center">
                <div className="pb p-around--medium">
                    <div className="pb-footer__wrapper">
                        {
                            (this.props.page === 'overview' || this.props.page === 'petybag') &&
                            <div>
                                <div className="pb-footer__section pb-footer__section--pets-slider-content">
                                    <PetsSlider/>
                                </div>

                                <div className="pb-footer__section pb-footer__section--contacts-content">
                                    <Contacts/>
                                </div>
                            </div>
                        }

                        <div className="pb-footer__section">
                            <div horizontal="between" vertical="start" className="m-bottom--x-large">
                                <div>
                                    <div className="pb-footer__title m-bottom--x-large">Facilite o passeio</div>
                                    <div>
                                        <a
                                            href=""
                                            target="_blank"
                                        >
                                            <button
                                                className="pb-button pb-button--white pb-button--bordered pb-button--p-horizontal"
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

                                <div className="pb-footer__navigation-wrapper">
                                    <div vertical="start" horizontal="between" className="pb-footer__navigation">
                                        <div direction="column">
                                            <Link
                                                to="/"
                                                activeClassName="pb-link--active"
                                                className="pb-link pb-link--white m-bottom--small"
                                            >
                                                Início
                                            </Link>

                                            <Link
                                                to="/petybag"
                                                activeClassName="pb-link--active"
                                                className="pb-link pb-link--white m-bottom--small"
                                            >
                                                Petybag
                                            </Link>

                                            <p className="pb-link pb-link--white">
                                                Rastrear
                                            </p>
                                        </div>

                                        <div direction="column">
                                            <Link
                                                to="/blog-list"
                                                className="pb-link pb-link--white m-bottom--small"
                                            >
                                                Blog
                                            </Link>

                                            <Link
                                                to="/#faqs"
                                                className="pb-link pb-link--white m-bottom--small"
                                            >
                                                Help + FAQs
                                            </Link>

                                            <Link
                                                to="/#contact"
                                                className="pb-link pb-link--white"
                                            >
                                                Contact
                                            </Link>
                                        </div>

                                        <div>
                                            <div>
                                                <a href="" className="pb-display--contents" target="_blank">
                                                    <div vertical="center" className="pb-link pb-link--white">
                                                        Instagram
                                                        <img
                                                            alt="Vector icon"
                                                            src={vectorIcon}
                                                            className="m-left--x-small"
                                                        />
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="m-top--small">
                                                <a href="" className="pb-display--contents" target="_blank">
                                                    <div vertical="center" className="pb-link pb-link--white">
                                                        Facebook
                                                        <img
                                                            alt="Vector icon"
                                                            src={vectorIcon}
                                                            className="m-left--x-small"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="m-top--x-large">
                                        <div className="pb-footer__text m-bottom--medium">
                                            CNPJ: 12.345.678/0001-23
                                        </div>

                                        <div vertical="center">
                                            <div className="pb-footer__text">©️ Petybag 2023</div>

                                            <div className="pb-footer__text-divider"></div>

                                            <a href="" className="pb-footer__text pb-footer__text--link" target="_blank">Privacy Policy</a>

                                            <div className="pb-footer__text-divider"></div>

                                            <a href="" className="pb-footer__text pb-footer__text--link" target="_blank">Terms of Services</a>

                                            <div className="pb-footer__text-divider"></div>

                                            <a href="" className="pb-footer__text pb-footer__text--link" target="_blank">Return & Refunds</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div vertical="center" horizontal="center" className="pb-footer__logo m-top--x-large">
                                Petybag
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
