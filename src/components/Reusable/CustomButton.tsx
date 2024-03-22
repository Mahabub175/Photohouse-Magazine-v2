import React from "react";

interface ButtonData {
  link: string;
  label: string;
}

interface CustomButtonProps {
  data: ButtonData;
}

const CustomButton: React.FC<CustomButtonProps> = ({ data }) => {
  return (
    <div>
      <a
        href={data?.link}
        target="_blank"
        className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-80 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">{data?.label}</span>
      </a>
    </div>
  );
};

export default CustomButton;
