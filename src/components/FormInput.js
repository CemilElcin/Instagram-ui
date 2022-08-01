import React, { useEffect, useRef, useState } from "react";
import { useField } from "formik";
import classNames from "classnames";

export default function FormInput({ label, type = "text", ...props }) {
  const [field, meta, helpers] =useField(props)
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);
  return (
    <label className=" relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
      <input
        type={inputType}
        {...field}
        {...props}
        className={classNames({
          " text-xs px-2 w-full h-[38px] outline-none bg-transparent":true,
          "pt-[10px]":field.value
        })}
      />
      <small className={classNames({
        "absolute  left-[9px] -translate-y-1/2 cursor-text pointer-events-none  to-gray-500 transition-all ":true,
        "text-xxs top-1/2":!field.value,
        "text-[10px] top-2.5":field.value,
      })}>
        {label}
      </small>
      {type === "password" && field.value && (
        <div
          onClick={() => setShow((show) => !show)}
          className=" h-full flex cursor-pointer select-none items-center text-sm font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
}
