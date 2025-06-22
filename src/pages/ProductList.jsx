import React from "react";
import CardTotal from "../components/CardTotal";

const ProductList = () => {

    return (
        <div className="container mt-3">
            <div className="bg-light d-sm-block d-md-flex">
                <p className="text-center text-danger w-100">Loading....</p>
                <>
                    <article id="product-panel" className="col-md-6">
                    </article>
                    <article className="col-md-4 m-3">
                        <CardTotal />
                    </article>
                </>
            </div>
        </div>
    );
};

export default ProductList;
