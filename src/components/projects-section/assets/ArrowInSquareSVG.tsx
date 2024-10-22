import React from "react";

type Props = {
  className?: string;
};

function ArrowInSquareSVG({ className }: Props) {
  return (
    <svg
      fill="#fff"
      className={className}
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M228,99.99805a12,12,0,0,1-24,.0039l-.00391-31.02734L152.457,120.51367a12.0001,12.0001,0,1,1-16.9707-16.9707l51.53906-51.53906L155.99854,52A12,12,0,0,1,156,28h.00146l59.99219.00781a11.99987,11.99987,0,0,1,11.99854,11.998ZM184,132a12.00028,12.00028,0,0,0-12,12v60H52V84h60a12,12,0,0,0,0-24H48A20.02229,20.02229,0,0,0,28,80V208a20.02229,20.02229,0,0,0,20,20H176a20.02229,20.02229,0,0,0,20-20V144A12.00028,12.00028,0,0,0,184,132Z" />
    </svg>
  );
}

export default ArrowInSquareSVG;
