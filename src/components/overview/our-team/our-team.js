import React, { Component } from 'react';
import "./our-team.scss";
import ourTeamImg from "../../../images/icons/our-team-img.svg";
import teamMember from "../../../images/icons/team-member.svg";
import teamMemberTwo from "../../../images/icons/team-member2.svg";
import teamMemberThree from "../../../images/icons/team-member3.svg";
import teamMemberFour from "../../../images/icons/team-member-4.svg";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
};

class OurTeam extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="comando" vertical="center" horizontal="center">
                <div className={ this.props.page !== "special-offer" ? "pb" : "pb pb-our-team--special-offer" }>
                    {
                        this.props.page !== "special-offer" &&
                        <div vertical="start" horizontal="between" className="pb-our-team__wrapper m-bottom--x-large">
                            <div className="p-right--large">
                                <div className="pb-our-team__label m-bottom--medium">
                                    Nossa Equipe
                                </div>
                                <div className="pb-our-team__sub-label">
                                    Apaixonados por animais de estimação
                                </div>
                            </div>

                            <div className="pb-our-team__img">
                                <img alt="Pet img" src={ourTeamImg}/>
                            </div>
                        </div>
                    }

                    <div className="m-top--x-large">
                        <Slider {...settings} className="pb-our-team__slider p-top--x-large">
                            <div className="p-horizontal--small" vertical="center" horizontal="center">
                                <div className="pb-our-team__slider-wrapper">
                                    <img className="pb-our-team__slider-img" alt="Team member" src={teamMember}/>
                                    <div className="pb-our-team__slide-author">
                                        <div className="pb-our-team__slide-author-name">
                                            Isabella Pereira
                                        </div>
                                        <div className="pb-our-team__slide-author-role">
                                            Diretor geral
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-horizontal--small" vertical="center" horizontal="center">
                                <div className="pb-our-team__slider-wrapper">
                                    <img className="pb-our-team__slider-img" alt="Team member" src={teamMemberTwo}/>
                                    <div className="pb-our-team__slide-author">
                                        <div className="pb-our-team__slide-author-name">
                                            Isabella Pereira
                                        </div>
                                        <div className="pb-our-team__slide-author-role">
                                            Diretor geral
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-horizontal--small" vertical="center" horizontal="center">
                                <div className="pb-our-team__slider-wrapper">
                                    <img className="pb-our-team__slider-img" alt="Team member" src={teamMemberThree}/>
                                    <div className="pb-our-team__slide-author">
                                        <div className="pb-our-team__slide-author-name">
                                            Isabella Pereira
                                        </div>
                                        <div className="pb-our-team__slide-author-role">
                                            Diretor geral
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-horizontal--small" vertical="center" horizontal="center">
                                <div className="pb-our-team__slider-wrapper">
                                    <img className="pb-our-team__slider-img" alt="Team member" src={teamMemberFour}/>
                                    <div className="pb-our-team__slide-author">
                                        <div className="pb-our-team__slide-author-name">
                                            Isabella Pereira
                                        </div>
                                        <div className="pb-our-team__slide-author-role">
                                            Diretor geral
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-horizontal--small" vertical="center" horizontal="center">
                                <div className="pb-our-team__slider-wrapper">
                                    <img className="pb-our-team__slider-img" alt="Team member" src={teamMemberFour}/>
                                    <div className="pb-our-team__slide-author">
                                        <div className="pb-our-team__slide-author-name">
                                            Isabella Pereira
                                        </div>
                                        <div className="pb-our-team__slide-author-role">
                                            Diretor geral
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-horizontal--small" vertical="center" horizontal="center">
                                <div className="pb-our-team__slider-wrapper">
                                    <img className="pb-our-team__slider-img" alt="Team member" src={teamMemberFour}/>
                                    <div className="pb-our-team__slide-author">
                                        <div className="pb-our-team__slide-author-name">
                                            Isabella Pereira
                                        </div>
                                        <div className="pb-our-team__slide-author-role">
                                            Diretor geral
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeam
