import React from "react";
import "../styles/index.scss";
import Seo from "../components/seo";
import Layout from "../components/shared/layout/layout";
import blogTwoImg from "../images/icons/blog-2.svg";
import { blogData } from "../blog-data/blog-data";

const BlogTwoPage = () => (
    <Layout>
        <Seo title="blog-2" />

        <div vertical="center" horizontal="center">
            <div className="pb pb-blog-post">
                <div vertical="start">
                    <div className="m-right--large">
                        <img className="pb-blog-post__image" src={blogTwoImg} alt="Img"/>
                    </div>

                    <div direction="column">
                        <div className="pb-blog-post__blog-title">
                            { blogData[1]?.title }
                        </div>

                        <div vertical="center" className="m-bottom--large">
                            <div className="pb-blog-post__blog-author">
                                { blogData[1]?.author }
                            </div>
                            <div className="pb-blog-post__blog-divider"></div>
                            <div className="pb-blog-post__blog-date">
                                { blogData[1]?.date }
                            </div>
                        </div>

                        <div className="pb-blog-post__blog-text">
                            { blogData[1]?.text }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
);

export default BlogTwoPage
