import React from "react";

export const Svg = ({ icon, width, height, color }) => {
  const search = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );

  const history = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  switch (icon) {
    case "search":
      return search;
    case "history":
      return history;
    case "close":
      return close;

    default:
      return null;
  }
};

Svg.defaultProps = {
  width: "24",
  height: "24",
  color: "#000",
};
