import React from "react";

export default function Node({ data, onClick }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", cursor: "pointer" }}
      onClick={() => onClick(data.id)}
    >
      {data.label}
    </div>
  );
}

