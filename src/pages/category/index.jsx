import React, { Suspense } from "react";
// import CategoryPage from "../../components/CategoryPage.jsx";
import Layout from "../../layouts/index.jsx";
const CategoryPage = React.lazy(() => import("../../components/CategoryPage.jsx"));


const Categoryindex = () => {
    return (
        <div>
            <Layout>
                <Suspense  fallback={<div>Loading...</div>}>
                    <CategoryPage />
                </Suspense>
            </Layout>
        </div>
    );
};

export default Categoryindex;
