import React, { Component } from 'react';
import { Link } from "gatsby";
import "./header.scss"
import bagIcon from "../../../images/icons/bag-icon.svg";
import bagIconDark from "../../../images/icons/bag-icon-dark.svg";
import vectorIcon from "../../../images/icons/vector-icon.svg";
import vectorIconDark from "../../../images/icons/vector-icon-dark.svg";
import petybagLogo from "../../../images/icons/petybag-logo.svg";
import trackIcon from "../../../images/icons/track-icon.svg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.openHamburger = this.openHamburger.bind(this);
        this.openRastrear = this.openRastrear.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.state = {
            condition: false,
            isRastrear: false,
            trackNumber: '',
            contentScrolled: false,
        };
    }

    openRastrear() {
        this.setState({
            isRastrear: true,
            condition: true
        });
    }
    closeMenu() {
        this.setState({
            isRastrear: false,
            condition: false
        });
    }

    openHamburger() {
        this.setState({
            condition: !this.state.condition,
            isRastrear: false
        });
    }

    handleStopPropagation = e => {
        e.stopPropagation();
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    onSubmit = event => {
        // submit action
        console.log('this.state.trackNumber', this.state.trackNumber);
    };

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let contentScrolled = true;
            if(window.scrollY < 16){
                contentScrolled = false;
            }
            this.setState({ contentScrolled });
        });
    }

    render() {
        return (
            <header
                horizontal="center"
                vertical="start"
                className= { this.state.condition ? "pb-header-wrapper pb-header-wrapper--active" : "pb-header-wrapper" }
            >
                <div direction="column" className="pb">
                    <div
                        className= { !this.state.contentScrolled ? "pb-header m-bottom--large" : "pb-header pb-header--scrolled m-bottom--large" }
                        vertical="center"
                        horizontal="between"
                    >
                        <div vertical="center" className="s-width--1-3">
                            <button
                                type="button"
                                className= { !this.state.condition ? "pb-button pb-button--bordered" : "pb-button pb-button--dark" }
                                onClick={this.openHamburger}
                            >
                                <button
                                    className= { this.state.condition ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse" }
                                    type="button"
                                >
                                    <span className= { this.state.condition ? "hamburger-box" : "hamburger-box hamburger-box--collapsed" }>
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </button>

                            <Link
                                to="/"
                                activeClassName="pb-link--active"
                                className="pb-link m-left--xx-large"
                                onClick={this.handleStopPropagation}
                            >
                                Início
                            </Link>

                            <Link
                                to="/petybag"
                                activeClassName="pb-link--active"
                                className="pb-link m-left--xx-large"
                                onClick={this.handleStopPropagation}
                            >
                                Petybag
                            </Link>

                            <p onClick={this.openRastrear} className="pb-link m-left--xx-large">Rastrear</p>
                        </div>

                        <div className="s-width--1-3" horizontal="center" vertical="center">
                            <img
                                className="pb-header__logo"
                                alt="Logo"
                                src={petybagLogo}
                            />
                        </div>

                        <div vertical="center" horizontal="end" className="s-width--1-3">
                            <a
                                href=""
                                onClick={this.handleStopPropagation}
                            >
                                <button
                                    className= { !this.state.condition ? "pb-button pb-button--bordered pb-button--p-horizontal" : "pb-button pb-button--dark pb-button--p-horizontal" }
                                    type="button"
                                >
                                    WhatsApp
                                    {
                                        this.state.condition &&
                                        <img
                                            alt="Vector icon"
                                            src={vectorIcon}
                                            className="m-left--x-small"
                                        />
                                    }
                                    {
                                        !this.state.condition &&
                                        <img
                                            alt="Vector icon"
                                            src={vectorIconDark}
                                            className="m-left--x-small"
                                        />
                                    }
                                </button>
                            </a>

                            <Link to="/payment">
                                <button
                                    className= { !this.state.condition ? "pb-bag-wrapper pb-button pb-button--bordered m-left--x-small" : "pb-bag-wrapper pb-button pb-button--dark m-left--x-small" }
                                    type="button"
                                >
                                    {
                                        this.state.condition &&
                                        <img
                                            alt="Bag icon"
                                            src={bagIcon}
                                        />
                                    }
                                    {
                                        !this.state.condition &&
                                        <img
                                            alt="Bag icon"
                                            src={bagIconDark}
                                        />
                                    }
                                    <div className="pb-bag-indicator"></div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {
                        (this.state.condition && !this.state.isRastrear) &&
                        <div className="pb-header-menu" vertical="start" horizontal="between">
                            <div direction="column">
                                <Link
                                    to=""
                                    className="pb-link pb-link--large m-bottom--medium"
                                    onClick={this.closeMenu}
                                >
                                    Revocação
                                </Link>

                                <Link
                                    to="/#comando"
                                    className="pb-link pb-link--large m-bottom--medium"
                                    onClick={this.closeMenu}
                                >
                                    Comando
                                </Link>

                                <Link
                                    to="/petybag/#produto"
                                    className="pb-link pb-link--large m-bottom--medium"
                                    onClick={this.closeMenu}
                                >
                                    Produto
                                </Link>

                                <Link
                                    to="/#faqs"
                                    className="pb-link pb-link--large m-bottom--medium"
                                    onClick={this.closeMenu}
                                >
                                    FAQs
                                </Link>

                                <Link
                                    to="/#contact"
                                    className="pb-link pb-link--large m-bottom--medium"
                                    onClick={this.closeMenu}
                                >
                                    Contact
                                </Link>

                                <Link
                                    to="/#pedido"
                                    className="pb-link pb-link--large"
                                    onClick={this.closeMenu}
                                >
                                    Enviar pedido
                                </Link>
                            </div>

                            <div direction="column">
                                <div>
                                    <a href="" target="_blank" className="pb-display--contents">
                                        <div vertical="center" className="pb-link">
                                            Instagram
                                            <img
                                                alt="Vector icon"
                                                src={vectorIconDark}
                                                className="m-left--x-small"
                                            />
                                        </div>
                                    </a>
                                </div>

                                <div className="m-top--small">
                                    <a href="" target="_blank" className="pb-display--contents">
                                        <div vertical="center" className="pb-link">
                                            Facebook
                                            <img
                                                alt="Vector icon"
                                                src={vectorIconDark}
                                                className="m-left--x-small"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        (this.state.condition && this.state.isRastrear) &&
                        <div className="pb-header-menu">
                            <div className="pb-header-menu__sub-label m-bottom--medium">Seguir a sua encomenda</div>

                            <form
                                vertical="center"
                                action=""
                                method=""
                                onSubmit={this.onSubmit}
                            >
                                <div className="pb-input-wrapper m-right--medium flex-grow">
                                    <img
                                        alt="Track icon"
                                        src={trackIcon}
                                        className="pb-input-icon pb-input-icon--left"
                                    />
                                    <input
                                        disabled={false}
                                        value={this.state.trackNumber}
                                        onChange={this.handleChange('trackNumber')}
                                        className="pb-input pb-input--with-icon"
                                        type="text"
                                        placeholder="Introduzir o número da faixa"
                                    />
                                </div>

                                <button
                                    className="pb-button pb-button--pink pb-header-menu__traco-button"
                                    type="submit"
                                >
                                    Traço
                                </button>
                            </form>
                        </div>
                    }
                </div>
            </header>
        )
    }
}

export default Header
