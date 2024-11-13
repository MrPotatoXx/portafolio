import React from 'react';

interface MailIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
}

const MailIcon: React.FC<MailIconProps> = ({
  width = 16,
  height = 16,
  fill = 'none',
  stroke = 'currentColor',
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
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export default MailIcon;