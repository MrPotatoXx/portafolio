import React from 'react';

interface WorldMapIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  className?: string;
}

const WorldMapIcon: React.FC<WorldMapIconProps> = ({
  width = 12,
  height = 12,
  fill = 'none',
  stroke = 'currentColor',
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

export default WorldMapIcon;
