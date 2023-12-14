import React from "react";
import Layout from "../components/shared/layout/layout";
import Seo from "../components/seo";
import "../styles/index.scss";
import BlogList from "../components/overview/blog/blog";

const BlogListPage = () => (
    <Layout>
        <Seo title="blog-list" />
        <div vertical="center" horizontal="center">
            <div className="pb">
                <BlogList page="blog-list" />
            </div>
        </div>
    </Layout>
);

export default BlogListPage
