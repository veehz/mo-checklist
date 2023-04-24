export default function Button({
    children,
    isLoading = false,
    props = {},
    className = "",
    flex = true,
    full = false,
    disabled = false,
    onClick,
  }: {
    children?: React.ReactNode;
    isLoading?: boolean;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    className?: string;
    full?: boolean;
    flex?: boolean;
    disabled?: boolean;
    onClick?: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className={
          "group relative justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:opacity-75 " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " +
          "disabled:opacity-75 " +
          (className.includes("bg-") ? "" : "bg-indigo-600 ") +
          (full ? "w-full " : "") +
          (flex ? "flex " : "") +
          className
        }
        disabled={isLoading || disabled}
        {...props}
      >
        <svg
          className={"animate-spin h-5 w-5 mr-3" + (isLoading ? "" : " hidden")}
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25 fill-indigo-600"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        {children}
      </button>
    );
  }
