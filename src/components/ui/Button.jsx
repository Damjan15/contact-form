const Button = ({ label = "Submit", type = "submit", onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "w-full rounded-lg bg-green-600 px-6 py-4 cursor-pointer",
        "font-[Karla] text-base font-bold text-white",
        "transition-colors duration-150",
        "hover:bg-green-900",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2",
        disabled && "cursor-not-allowed opacity-50",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </button>
  );
};

export default Button;
