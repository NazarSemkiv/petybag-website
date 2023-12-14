import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import PaymentNavigation from "../components/payment/payment-navigation/payment-navigation";
import PaymentSteps from "../components/payment/payment-steps/payment-steps";

const Payment = () => (
    <Layout page="payment">
        <Seo title="Payment"/>
        <PaymentNavigation/>
        <PaymentSteps/>
    </Layout>
);

export default Payment
