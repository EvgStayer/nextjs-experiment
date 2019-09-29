import Layout from '../../components/MyLayout';
import React, { Component } from "react";

export default class extends Component {

    static getInitialProps(data) {
        return {
            id: data.query.id,
        };
    }
    render() {
        const { id } = this.props;
        return (
            <Layout>
                <p>Обзор по слугу: {id}</p>
            </Layout>
        );
    }
}