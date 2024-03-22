import React from "react";
import CustomButton from "../Reusable/CustomButton";

const SocialShow = () => {
  return (
    <div className="relative flex flex-col justify-center self-center w-full text-center my-20">
      <h1 className="mb-3 text-2xl md:text-5xl lg:text-6xl  text-white font-bold">
        Inspire and get inspired
      </h1>
      <p className="px-[5%] mb-2 text-bold md:text-lg text-sm">
        Join our Photography community, submit your photo to our next magazine
      </p>
      <div className="flex justify-center flex-col md:flex-row self-start md:self-auto mx-auto">
        <CustomButton data={{ link: "", label: "Join Our Community" }} />
        <CustomButton data={{ link: "", label: "Submit Your Photo" }} />
      </div>
    </div>
  );
};

export default SocialShow;
