"use client";
import { useGetMagazineQuery } from "@/redux/service/magazine/magazineService";
import { base_url } from "@/utils/base_api";
import Image from "next/image";
import React from "react";

type THomeImage = {
  image: string;
  click: string;
};

const Banner = () => {
  const { data } = useGetMagazineQuery(undefined);
  return (
    <div className="grid grid-cols-3">
      {data?.homeSliderImgs.map((img: THomeImage, index: number) => (
        <div
          key={index + 1515}
          className="relative lg:h-[90vh] md:h-[80vh] h-[60vh] group"
        >
          <Image
            src={base_url + "/" + img.image}
            alt="hero image"
            layout="fill"
            objectFit="cover"
            priority
            className=""
          />
          <p className="hidden group-hover:block absolute bottom-0 text-sm text-center w-full bg-black/50 font-bold">
            {img.click}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Banner;
