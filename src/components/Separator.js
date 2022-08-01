import React from "react";

export default function ({label='OR'}) {
  return (
    <div className="flex items-center my-2.5 mb-3.5">
      <div className="h-px bg-gray-300 flex-1" />
      <span className="px-4 text-[13px] font-semibold text-gray-500">{label}</span>
      <div className="h-px bg-gray-300 flex-1" />
    </div>
  );
}
