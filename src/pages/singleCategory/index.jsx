import React from "react";
import { Suspense } from "react";
import Layout from "../../layouts/index.jsx";
const SingleProduct = React.lazy(() => import("../../components/SingleProduct.jsx"));


const SingleProductPage = () => {
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <SingleProduct />
            </Suspense>
        </Layout>
    );
};

export default SingleProductPage;
