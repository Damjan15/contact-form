import { useEffect } from "react";

const Toast = ({ visible, onDismiss }) => {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      onDismiss();
    }, 4000);

    return () => clearTimeout(timer);
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={[
        "fixed top-8 left-1/2 -translate-x-1/2",
        "w-[calc(100%-2rem)] max-w-md",
        "flex flex-col gap-2 rounded-xl bg-grey-900 px-8 py-6",
        "z-50",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-3">
        <img
          src="/icons/icon-success-check.svg"
          alt=""
          aria-hidden="true"
          className="h-5 w-5 shrink-0"
        />
        <p className="font-[Karla] text-base font-bold text-white">
          Message Sent!
        </p>
      </div>

      <p className="font-[Karla] text-base text-grey-500">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default Toast;
