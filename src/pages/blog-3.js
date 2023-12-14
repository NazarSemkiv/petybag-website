import React from "react";
import "../styles/index.scss";
import Seo from "../components/seo";
import Layout from "../components/shared/layout/layout";
import blogThreeImg from "../images/icons/blog-3.svg";
import { blogData } from "../blog-data/blog-data";
import {Link} from "gatsby";

const BlogThreePage = () => (
    <Layout>
        <Seo title="blog-3" />

        <div vertical="center" horizontal="center">
            <div className="pb pb-blog-post">
                <div vertical="center" className="m-bottom--x-large">
                    <Link to="/" className="pb-navigation__previous">
                        Início
                    </Link>

                    <div className="pb-navigation__navigation-divider m-horizontal--x-small">/</div>

                    <Link to="/blog-list" className="pb-navigation__previous">
                        Blogue
                    </Link>

                    <div className="pb-navigation__navigation-divider m-horizontal--x-small">/</div>

                    <Link to="" className="pb-navigation__current">
                        Publicar
                    </Link>
                </div>

                <div vertical="start">
                    <div className="m-right--large">
                        <img className="pb-blog-post__image" src={blogThreeImg} alt="Img"/>
                    </div>

                    <div direction="column">
                        <div className="pb-blog-post__blog-title">
                            { blogData[2]?.title }
                        </div>

                        <div vertical="center" className="m-bottom--large">
                            <div className="pb-blog-post__blog-author">
                                { blogData[2]?.author }
                            </div>
                            <div className="pb-blog-post__blog-divider"></div>
                            <div className="pb-blog-post__blog-date">
                                { blogData[2]?.date }
                            </div>
                        </div>

                        <div className="pb-blog-post__blog-text">
                            { blogData[2]?.text }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
);

export default BlogThreePage
