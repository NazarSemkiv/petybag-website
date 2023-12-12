import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import "../styles/index.scss";

const wrapperStyles = {
  padding: "100px 0 100px",
};

const NotFoundPage = () => (
    <Layout>
      <Seo title="404: Not found" />
      <div vertical="center" horizontal="center">
        <div className="ps" vertical="center" direction="column" style={wrapperStyles}>
          <h1>NOT FOUND</h1>
          <p className="m-top--medium">You just hit a route that doesn&#39;t exist.</p>
        </div>
      </div>
    </Layout>
);

export default NotFoundPage
