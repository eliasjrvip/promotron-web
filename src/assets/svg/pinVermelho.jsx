import React from 'react';

export default function pinVermelho({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '27.168'}
      height={height || '20.836'}
      viewBox="0 0
     27.168 20.836"
    >
      <defs>
        <linearGradient
          id="a"
          x1="-19.899"
          y1="10.03"
          x2="-19.821"
          y2="10.03"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fc2a61" />
          <stop offset="0.382" stopColor="#fd1870" />
          <stop offset="1" stopColor="#ff0086" />
        </linearGradient>
      </defs>
      <path
        fill="#FF0086"
        className="a"
        d="M408.866,806.623l-7.949,10.434-8.364-10.107a10.42,10.42,0,0,1-.258-12.957h0a10.422,10.422,0,0,1,16.314-.327h0A10.421,10.421,0,0,1,408.866,806.623Z"
        transform="translate(-789.889 410.999) rotate(-90)"
      />
    </svg>
  );
}
