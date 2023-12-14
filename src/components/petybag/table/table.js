import React, { Component } from 'react';
import "./table.scss";
import tableIconOne from "../../../images/icons/table-icon-1.svg";
import tableIconTwo from "../../../images/icons/table-icon-2.svg";
import tableIconThree from "../../../images/icons/table-icon-3.svg";
import tableIconFour from "../../../images/icons/table-icon-4.svg";
import closeIcon from "../../../images/icons/close-icon.svg";
import completeIcon from "../../../images/icons/complete-icon.svg";
import completeIconWhite from "../../../images/icons/complete-icon-white.svg";

class Table extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-table">
                    <div className="pb-table__sub-label m-bottom--medium">
                        Género
                    </div>

                    <div className="pb-table__label p-bottom--x-large">
                        Pettybag x Outros Meios
                    </div>

                    <div className="pb-table__table m-top--x-large">
                        <div vertical="center" horizontal="end" className="m-bottom--x-large">
                            <div className="pb-table__table-img">
                                <img alt="Table img" src={tableIconOne}/>
                            </div>

                            <div className="pb-table__table-img">
                                <img alt="Table img" src={tableIconTwo}/>
                            </div>

                            <div className="pb-table__table-img">
                                <img alt="Table img" src={tableIconThree}/>
                            </div>

                            <div className="pb-table__table-img">
                                <img alt="Table img" src={tableIconFour}/>
                            </div>
                        </div>

                        <div className="m-bottom--x-large">
                            <div className="pb-table__table-value-wrapper" vertical="center" horizontal="between">
                                <div className="pb-table__table-value">
                                    Confortável para seu cão
                                </div>

                                <div vertical="center">
                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator pb-table__table-indicator--pink" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIconWhite}/>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-table__table-value-wrapper" vertical="center" horizontal="between">
                                <div className="pb-table__table-value">
                                    Você não precisa mais “fazer o trabalho sujo”
                                </div>

                                <div vertical="center">
                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator pb-table__table-indicator--pink" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIconWhite}/>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-table__table-value-wrapper" vertical="center" horizontal="between">
                                <div className="pb-table__table-value">
                                    Sem contato com o chão
                                </div>

                                <div vertical="center">
                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator pb-table__table-indicator--pink" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIconWhite}/>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-table__table-value-wrapper" vertical="center" horizontal="between">
                                <div className="pb-table__table-value">
                                    Operação de uma mão
                                </div>

                                <div vertical="center">
                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator pb-table__table-indicator--pink" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIconWhite}/>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-table__table-value-wrapper" vertical="center" horizontal="between">
                                <div className="pb-table__table-value">
                                    Custo por uso
                                </div>

                                <div vertical="center">
                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={closeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIcon}/>
                                    </div>

                                    <div className="pb-table__table-indicator pb-table__table-indicator--pink" vertical="center" horizontal="center">
                                        <img alt="Icon" src={completeIconWhite}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div vertical="center" horizontal="end">
                            <div className="pb-table__table-price">
                                R$2,50
                            </div>
                            <div className="pb-table__table-price">
                                R$0
                            </div>
                            <div className="pb-table__table-price">
                                R$0,50
                            </div>
                            <div className="pb-table__table-price pb-table__table-price--pink">
                                R$0,20
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table
