import React from "react";

export default function Edge({ id, source, target, type }) {
  // Use the edge data to define the path and other properties
  return (
    <path
      id={id}
      style={{ stroke: "#ccc", strokeWidth: 2 }}
      d={`M ${source.x} ${source.y} L ${target.x} ${target.y}`}
    />
  );
}
