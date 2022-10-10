import React, { Suspense } from "react";
import Layout from "../layouts/index.jsx";
// import { SpinnerCircular } from "spinners-react";
const ProductDetails = React.lazy(() => import("../components/ProductDetails.jsx"));


const Home = () => {

    return (
        <Layout>
            <Suspense  fallback={<div>Loading...</div>}>
                <ProductDetails />
            </Suspense>
        </Layout>




    );
};

export default Home;
