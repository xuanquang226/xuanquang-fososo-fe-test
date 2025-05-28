import React from "react";

const TaggedButton:React.FC<TaggedButtonProps> = ({ label = "Liên quan", active = false, onClick }) => {
  return (
    <div
      className={`relative inline-block px-4 py-2 rounded-md border font-medium overflow-hidden ${
        active
          ? "border-blue-500 text-blue-600 bg-white"
          : "border-gray-300 text-gray-600 bg-white"
      }`}
      onClick={onClick}
    >
      {label}
      {active && (
        <>
          {/* Tam giác góc phải trên */}
          <div className={`absolute top-0 right-0 w-0 h-0 border-t-[16px] border-l-[20px] border-t-blue-500 
            border-l-transparent rounded-tr-sm`}></div>

          {/* Icon check mark hoặc ảnh */}
          <div className="absolute top-[1px] right-[1px] text-white text-[10px] leading-none">
            <img src="/images/v.png" alt="" className="" />
          </div>
        </>
      )}
    </div>
  );
};

export default TaggedButton;
