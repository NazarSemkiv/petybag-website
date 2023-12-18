import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import PaymentNavigation from "../components/payment/payment-navigation/payment-navigation";
import PaymentSteps from "../components/payment/payment-steps/payment-steps";
import PaymentTotal from "../components/payment/payment-total/payment-total";
import Tracking from "../components/payment/tracking/tracking";

export default function Payment() {
    const [option, setValue] = React.useState({ selectedOption: null, view: 'purchase' })
    function onSubmit(e) {
        setValue(e);
    }

    return (
        <Layout page="payment">
            <Seo title="Payment"/>
            <PaymentNavigation/>
            {
                (option?.view === 'purchase') &&
                <PaymentSteps onOptionSelected={onSubmit} />
            }
            {
                (option?.view === 'total') &&
                <PaymentTotal selectedOption={option.selectedOption} nextStep={onSubmit} />
            }
            {
                (option?.view === 'tracking') &&
                <Tracking/>
            }
        </Layout>
    )
}
