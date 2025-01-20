const Arrow = ({ direction = 'left' }: { direction?: 'left' | 'right' }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === 'right' ? 'rotate(180deg)' : 'none',
        transformOrigin: 'center',
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
