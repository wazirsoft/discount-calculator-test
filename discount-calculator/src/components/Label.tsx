import React from "react";

interface Props {
  text: string;
  htmlFor?: string;
}

export default function Label({ text, htmlFor }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-md font-semibold mb-2 text-white"
    >
      {text}:
    </label>
  );
}
