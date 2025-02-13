import React from 'react';

interface DownloadIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({
  width = 16,
  height = 16,
  fill = 'none',
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export default DownloadIcon;
