import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import "../../../styles/index.scss";

const Layout = ({ children, page }) => {
    return (
        <>
            <Header page={page}/>
            <main className="pb-header-gap">{children}</main>
            <Footer page={page}/>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
