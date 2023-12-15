import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import PaymentNavigation from "../components/payment/payment-navigation/payment-navigation";
import PaymentSteps from "../components/payment/payment-steps/payment-steps";

export default function Payment() {
    const [option, setValue] = React.useState(null)

    function onSubmit(e) {
        setValue(e)
        console.log('selected option', option);
    }

    return (
        <Layout page="payment">
            <Seo title="Payment"/>
            <PaymentNavigation/>
            {
                (option === null) &&
                <PaymentSteps onOptionSelected={onSubmit} />
            }
        </Layout>
    )
}
