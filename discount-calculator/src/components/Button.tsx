import React from "react";

interface Props {
  id?: string;
  text: string;
  onClick: () => any;
}

export default function Button({ id, text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      id={id}
      className="btn btn-outline bg-white p-2 m-2 rounded"
    >
      {text}
    </button>
  );
}
