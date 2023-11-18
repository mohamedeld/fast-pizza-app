import React from "react";

export default function Button({ children, disabled, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase  tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none";

  const styles = {
    primary: `${base} px-4 py-3 sm:px-6 sm:py-4`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-sm`,
    delete:
      "inline-block rounded-full bg-stone-100 font-semibold capitalize tracking-side text-stone-500 transition-colors duration-300 hover:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-2 py-2 px-3 hover:text-stone-700",
  };
  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
