import * as React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import Intro from "../components/overview/intro/intro";
import TextSection from "../components/overview/text-section/text-section";
import Comments from "../components/overview/comments/comments";
import Quantidade from "../components/overview/quantidade/quantidade";
import OurTeam from "../components/overview/our-team/our-team";

const IndexPage = () => {
  return (
      <Layout page="overview">
        <Seo title="Home" />
        <Intro/>
        <TextSection/>
        <Comments/>
        <Quantidade/>
        <OurTeam/>
      </Layout>
  )
};

export default IndexPage
