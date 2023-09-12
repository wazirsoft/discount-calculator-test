import React, { ChangeEvent } from "react";

interface Props {
  id?: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (val: number) => void;
  symbolRight?: string;
  symbolLeft?: string;
  disabled?: boolean;
}

export default function Input({
  placeholder,
  id,
  value,
  onChange,
  symbolRight,
  symbolLeft,
  disabled,
}: Props) {
  return (
    <div className="relative">
      <input
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        className={`border-0 outline-none rounded-md p-3 mb-4 w-full ${
          symbolLeft ? "pl-7" : null
        }`}
        value={value || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (isNaN(parseInt(e.target.value)) && e.target.value != "") return;
          else onChange(parseInt(e.target.value || "0"));
        }}
      />
      {symbolLeft ? (
        <span className="absolute top-[calc(50%-1rem-4px)] left-3">
          {symbolLeft}
        </span>
      ) : null}

      {symbolRight ? (
        <span className="absolute top-[calc(50%-1rem-4px)] right-3">
          {symbolRight}
        </span>
      ) : null}
    </div>
  );
}
