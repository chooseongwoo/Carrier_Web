interface BtnDisplayProps {
  selected?: boolean;
  onClick?: () => void;
}

const BtnDisplay = ({ selected = false, onClick }: BtnDisplayProps) => {
  return (
    <svg
      width="44"
      height="24"
      viewBox="0 0 44 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g filter="url(#filter0_i_314_439)">
        <g clipPath="url(#clip0_314_439)">
          <rect
            width="44"
            height="24"
            rx="12"
            fill={selected ? '#587EFD' : '#e5e5e5'}
          />
          <g filter="url(#filter1_d_314_439)">
            <rect
              x={selected ? 22 : 2}
              y="2"
              width="20"
              height="20"
              rx="10"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_314_439"
          x="0"
          y="0"
          width="44"
          height="24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.475309 0 0 0 0 0.475309 0 0 0 0 0.475309 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_314_439"
          />
        </filter>
        <filter
          id="filter1_d_314_439"
          x="12"
          y="-6"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.32762 0 0 0 0 0.32762 0 0 0 0 0.32762 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_314_439"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_314_439"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_314_439">
          <rect width="44" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BtnDisplay;
