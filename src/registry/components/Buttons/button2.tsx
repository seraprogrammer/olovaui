const ButtonTwo = () => {
  return (
    <div>
      <button className="w-[120px] h-10 bg-[#101218] flex items-center justify-center border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#202531] group">
        <span className="w-10 h-10 flex flex-col items-center justify-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 60 20"
            className="w-[40%] z-[3] transition-all duration-300 group-hover:-translate-y-[5px]"
          >
            <path
              strokeLinecap="round"
              strokeWidth={4}
              stroke="#6A8EF6"
              d="M2 18L58 18"
            />
            <circle
              strokeWidth={5}
              stroke="#6A8EF6"
              fill="#101218"
              r={7}
              cy="9.5"
              cx="20.5"
            />
            <circle
              strokeWidth={5}
              stroke="#6A8EF6"
              fill="#101218"
              r={7}
              cy="9.5"
              cx="38.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 58 44"
            className="w-[40%] z-[3]"
          >
            <mask fill="white" id="path-1-inside-1_81_19">
              <rect rx={3} height={44} width={58} />
            </mask>
            <rect
              mask="url(#path-1-inside-1_81_19)"
              strokeWidth={8}
              stroke="#6A8EF6"
              fill="#101218"
              rx={3}
              height={44}
              width={58}
            />
            <line
              strokeWidth={6}
              stroke="#6A8EF6"
              y2={29}
              x2={58}
              y1={29}
              x1="-3.61529e-09"
            />
            <path
              strokeLinecap="round"
              strokeWidth={5}
              stroke="#6A8EF6"
              d="M45.0005 20L36 3"
            />
            <path
              strokeLinecap="round"
              strokeWidth={5}
              stroke="#6A8EF6"
              d="M21 3L13.0002 19.9992"
            />
          </svg>
          <span className="w-[25%] h-[25%] bg-[#e4d61a] absolute rounded-full border-2 border-[#ffe956] mt-1 transition-all duration-300 group-hover:-translate-y-[5px] delay-200 z-[1]" />
        </span>
        <span className="w-[70px] h-full text-[13px] text-[#6a8ef6] flex items-center justify-start font-semibold">
          Rewards
        </span>
      </button>
    </div>
  );
};

export default ButtonTwo;
