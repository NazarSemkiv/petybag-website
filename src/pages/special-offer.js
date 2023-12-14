import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import Special from "../components/petybag/special/special";
import OurTeam from "../components/overview/our-team/our-team";
import MoreInfo from "../components/petybag/more-info/more-info";

const SpecialOffer = () => (
    <Layout page="special-offer">
        <Seo title="Special offer"/>
        <Special page="special-offer"/>
        <OurTeam page="special-offer"/>
        <MoreInfo/>
    </Layout>
);

export default SpecialOffer
