"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import GlobalApi from "../_utils/GlobalApi";
import { ArrowRight } from "lucide-react";

function ProductSection() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    GlobalApi.getLatestProducts().then((resp) => {
      // console.log(resp.data.data);
      setProductList(resp.data.data);
    });
  };

  const filterProductList = (category) => {
    const result = productList.filter(
      (item) => item.attributes.category == category
    );
    return result;
  };
  return (
    <div className=" px-10 md:px-20">
      {/* Latest product  */}
      <h2 className="font-bold text-[20px] my-3">
        All products
        <span
          className="font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-blue-600"
        >
          View All Collection <ArrowRight className="h-4" />{" "}
        </span>
      </h2>
      <ProductList productList={productList} />

      {/* Source Code Products  */}
      <h2 className="font-bold text-[20px] my-3">
        Vintage
        <span
          className="font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-blue-600"
        >
          View All Collection
          <ArrowRight className="h-4" />{" "}
        </span>
      </h2>
      <ProductList productList={filterProductList("Source Code")} />

      {/* Icons Pack Products  */}
      <h2 className="font-bold text-[20px] my-3">
        Icons
        <span
          className="font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-blue-600"
        >
          View All Collection <ArrowRight className="h-4" />{" "}
        </span>
      </h2>
      <ProductList productList={filterProductList("Icons")} />
    </div>
  );
}

export default ProductSection;
