import { useEffect, useRef, useState } from "react";

const useAwayListener = (initialValue) => {
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [ref]);
  const [open, setOpen] = useState(initialValue);
  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  return [open, setOpen, ref];
};

export default useAwayListener;
