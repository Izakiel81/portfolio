import { FC } from "react";

interface SVGProps {
  className?: string;
}

const TensorFlowSVG: FC<SVGProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#FF8C00", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FFA500", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M29.399 14.959l-0.017-6.636-12.806-7.319v29.991l5.117-2.972v-8.438l3.864 2.234-0.023-5.771-3.841-2.194v-3.35l7.708 4.454zM2.619 8.322l12.806-7.318v29.991l-5.117-2.972v-17.519l-7.708 4.454 0.019-6.636z"
        fill="url(#grad1)"
      />
    </svg>
  );
};

export default TensorFlowSVG;
