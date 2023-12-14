import React, { Component } from 'react';
import "./blog.scss";
import blogOneImg from "../../../images/icons/blog-1.svg";
import blogTwoImg from "../../../images/icons/blog-2.svg";
import blogThreeImg from "../../../images/icons/blog-3.svg";
import { blogData } from "../../../blog-data/blog-data";
import { Link } from "gatsby";

class BlogList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className={ this.props.page === 'overview' ? "pb pb-blog pb-blog--home" :  "pb pb-blog" }>
                    <div vertical="center" horizontal="between" className="m-bottom--x-large">
                        <div className="pb-blog__title">
                            Blogue
                        </div>


                        {
                            this.props.page === 'overview' &&
                            <Link to="/blog-list">
                                <button className="pb-button pb-button--p-horizontal pb-button--bordered" type="button">
                                    Ver todos
                                </button>
                            </Link>
                        }
                    </div>

                    {
                        this.props.page === 'overview' &&
                        <div className="pb-blog__blog-list p-top--x-large">
                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[0]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogOneImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[0]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[0]?.text }
                                    </div>
                                    <Link
                                        to="/blog-1"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[0]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[0]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[1]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogTwoImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[1]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[1]?.text }
                                    </div>
                                    <Link
                                        to="/blog-2"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[1]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[1]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[2]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogThreeImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[2]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[2]?.text }
                                    </div>
                                    <Link
                                        to="/blog-3"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[2]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[2]?.date }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        this.props.page === 'blog-list' &&
                        <div className="pb-blog__blog-list p-top--x-large">
                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[0]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogOneImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[0]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[0]?.text }
                                    </div>
                                    <Link
                                        to="/blog-1"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[0]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[0]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[1]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogTwoImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[1]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[1]?.text }
                                    </div>
                                    <Link
                                        to="/blog-2"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[1]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[1]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[2]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogThreeImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[2]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[2]?.text }
                                    </div>
                                    <Link
                                        to="/blog-3"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[2]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[2]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[0]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogOneImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[0]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[0]?.text }
                                    </div>
                                    <Link
                                        to="/blog-1"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[0]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[0]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[1]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogTwoImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[1]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[1]?.text }
                                    </div>
                                    <Link
                                        to="/blog-2"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[1]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[1]?.date }
                                    </div>
                                </div>
                            </div>

                            <div className="pb-blog__blog-item">
                                <div className="pb-blog__image-wrapper m-bottom--large">
                                    <div className="pb-blog__badges-wrapper" vertical="center">
                                        { blogData[2]?.badges?.map(badge => {
                                            return (
                                                <div className="pb-blog__badge">
                                                    { badge?.text }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <img className="pb-blog__image" src={blogThreeImg} alt="Img"/>
                                </div>

                                <div className="pb-blog__blog-title m-bottom--medium">
                                    { blogData[2]?.title }
                                </div>

                                <div className="pb-blog__blog-text m-bottom--small">
                                    <div className="pb-blog__blog-text-wrapper m-bottom--xx-small">
                                        { blogData[2]?.text }
                                    </div>
                                    <Link
                                        to="/blog-3"
                                        className="pb-blog__blog-text pb-blog__blog-text--link"
                                    >
                                        Read more
                                    </Link>
                                </div>

                                <div vertical="center">
                                    <div className="pb-blog__blog-author">
                                        { blogData[2]?.author }
                                    </div>
                                    <div className="pb-blog__blog-divider"></div>
                                    <div className="pb-blog__blog-date">
                                        { blogData[2]?.date }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default BlogList
