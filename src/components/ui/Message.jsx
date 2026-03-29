const Message = ({
  id,
  label,
  required = false,
  rows = 5,
  cols,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base text-grey-900">
        {label}
        {required && (
          <span className="ml-3 text-green-600" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <textarea
        id={id}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-base text-grey-900 outline-none transition-colors duration-150 placeholder:text-grey-500 resize-none ${error ? "border-red-error hover:border-red-error focus:border-red-error focus:ring-1 focus:ring-red-error" : "border-grey-500 hover:border-green-600 focus:border-green-600 focus:ring-1 focus:ring-green-600"}`}
      />

      {error && (
        <p id={`${id}-error`} role="alert" className="text-base text-red-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Message;
