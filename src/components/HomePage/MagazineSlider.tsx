/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetMagazineQuery } from "@/redux/service/magazine/magazineService";
import { base_url } from "@/utils/base_api";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MagazineSlider = () => {
  const { data } = useGetMagazineQuery(undefined);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 5,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filteredData = data?.Magazines?.filter(
    (item: any) =>
      item?.isSpecial === false || !item?.hasOwnProperty("isSpecial")
  );

  return (
    <div className="maga-slide my-5">
      <Slider {...settings}>
        {filteredData?.map((item: any) => (
          <div key={item?._id}>
            <Link href="/magazines">
              <img
                src={base_url + "/" + item?.image}
                alt="img"
                className="w-full px-[10px] py-[50px] rounded-sm"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MagazineSlider;
