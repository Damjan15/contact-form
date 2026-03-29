const Checkbox = ({ id, label, checked, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={[
          "flex cursor-pointer items-center gap-4 rounded-lg border px-6 py-3",
          "font-[Karla] text-base text-grey-900",
          "transition-colors duration-150",
          "hover:border-green-600",
          "has-focus-visible:ring-2 has-focus-visible:ring-green-600 has-focus-visible:ring-offset-1",
          error ? "border-red-error" : "border-grey-500",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="sr-only"
        />

        {/* Custom square indicator */}
        <span
          className={[
            "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2",
            "transition-colors duration-150",
            checked
              ? "border-green-600 bg-green-600"
              : error
                ? "border-red-error bg-white"
                : "border-grey-500 bg-white",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 10"
              fill="none"
              className="h-3 w-3"
            >
              <path
                d="M1 5L4.5 8.5L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>

        <span>
          {label}
          <span className="ml-3 text-green-600" aria-hidden="true">
            *
          </span>
        </span>
      </label>

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="font-[Karla] text-base text-red-error"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
