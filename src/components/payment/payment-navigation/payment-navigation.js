import React, { Component } from 'react';
import "./payment-navigation.scss";
import { Link } from "gatsby";

class PaymentNavigation extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-payment-navigation">
                    <div vertical="center">
                        <Link to="/" className="pb-navigation__previous">
                            Início
                        </Link>

                        <div className="pb-navigation__navigation-divider m-horizontal--x-small">/</div>

                        <Link to="/payment" className="pb-navigation__current">
                            Finalização da compra
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentNavigation
