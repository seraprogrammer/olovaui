export default function Button5() {
  return (
    <div className="group relative inline-flex items-center justify-center gap-4">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 opacity-60 blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <button
        type="button"
        className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30"
        title="payment"
      >
        Get Started For Free
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 -mr-1 ml-2 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="opacity-0 transition group-hover:opacity-100"
          ></path>
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          ></path>
        </svg>
      </button>
    </div>
  );
}
