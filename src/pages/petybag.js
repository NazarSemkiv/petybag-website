import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import Intro from "../components/petybag/intro/intro";
import TextSection from "../components/petybag/text-section/text-section";
import Video from "../components/petybag/video/video";
import PetybagInfo from "../components/petybag/info/info";
import Faq from "../components/overview/faq/faq";
import Info from "../components/overview/info/info";
import Table from "../components/petybag/table/table";
import Qualities from "../components/overview/qualities/qualities";
import SizesInfo from "../components/petybag/sizes-info/sizes-info";
import Clients from "../components/petybag/clients/clients";
import Care from "../components/petybag/care/care";
import MoreInfo from "../components/petybag/more-info/more-info";
import Special from "../components/petybag/special/special";

const Petybag = () => (
    <Layout page="petybag">
        <Seo title="Petybag" />
        <Intro/>
        <TextSection/>
        <Video/>
        <PetybagInfo/>
        <Special/>
        <MoreInfo/>
        <Care/>
        <Qualities/>
        <Clients/>
        <SizesInfo/>
        <Table/>
        <Info page="petybag"/>
        <Faq/>
    </Layout>
);

export default Petybag
