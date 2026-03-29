const Radio = ({ id, label, name, value, checked, onChange }) => {
  return (
    <label
      htmlFor={id}
      className={[
        "flex cursor-pointer items-center gap-3 rounded-lg border px-6 py-3",
        "font-[Karla] text-base text-grey-900",
        "transition-colors duration-150",
        "hover:border-green-600",
        "has-focus-visible:ring-2 has-focus-visible:ring-green-600 has-focus-visible:ring-offset-1",
        checked ? "border-green-600" : "border-grey-500",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      {/* Custom circle indicator */}
      <span
        className={[
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
          "transition-colors duration-150",
          checked ? "border-green-600" : "border-grey-500",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-green-600" />}
      </span>

      <span>{label}</span>
    </label>
  );
};

export default Radio;
