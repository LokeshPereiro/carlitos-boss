import React from "react";
import ProductItem from "./ProductItem";
import ProductItemSkelton from "./ProductItemSkelton";

function ProductList({ productList }) {
  return (
    <>
      {productList?.length > 0 ? (
        <div
          className="grid grid-cols-2
     sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {productList.map(
            (item, index) =>
              index <= 3 && (
                <div key={index}>
                  <ProductItem product={item} />
                </div>
              )
          )}
        </div>
      ) : (
        <div
          className="grid grid-cols-2
    sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {[1, 2, 3, 4].map((item, index) => (
            <ProductItemSkelton key={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;
