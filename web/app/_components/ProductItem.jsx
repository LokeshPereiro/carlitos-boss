import { ChevronRightSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItem({ product }) {
  return (
    <Link href={"/project-detail/" + product.id}>
      <div
        className="hover:border p-1 
        rounded-lg border-blue-300 cursor-pointer"
      >
        <Image
          src={product?.attributes?.banner?.data.attributes?.url}
          alt="banner"
          width={400}
          height={350}
          className="rounded-t-lg 
          h-[190px] object-cover"
        />
        <div
          className="flex 
          justify-between items-center
          bg-gray-50 p-3 rounded-b-lg"
        >
          <div className="">
            <h2
              className="text-[14px] 
            font-medium line-clamp-2"
            >
              {product.attributes.title}
            </h2>
            {product?.attributes?.category && (
              <h2 className="text-[12px] text-gray-400 flex gap-2">
                <ChevronRightSquare className="h-4 w-4" />{" "}
                {product?.attributes?.category}
              </h2>
            )}
          </div>
          <h2 className="font-medium text-primary">
            €{product.attributes?.pricing}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
