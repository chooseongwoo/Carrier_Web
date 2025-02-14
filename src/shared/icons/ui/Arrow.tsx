interface ArrowProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  size?: number;
}

const Arrow = ({ direction = 'left', size = 24 }: ArrowProps) => {
  let rotation = 0;
  switch (direction) {
    case 'right':
      rotation = 180;
      break;
    case 'up':
      rotation = 90;
      break;
    case 'down':
      rotation = -90;
      break;
    case 'left':
    default:
      rotation = 0;
      break;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        cursor: 'pointer',
      }}
    >
      <path
        d="M15.75 20L8.25 12.5L15.75 5"
        stroke="#121213"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
