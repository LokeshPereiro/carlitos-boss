import Image from "next/image";
import React from "react";

function ProjectBanner({ product }) {
  return (
    <div className="w-full">
      {product ? (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="banner"
          width={350}
          height={400}
          className="rounded-lg 
            text-center
            sm:float-right
            object-cover
            "
        />
      ) : (
        <div
          className="h-[350px]
        w-[350px] bg-slate-200
        animate-pulse"
        ></div>
      )}
    </div>
  );
}

export default ProjectBanner;
