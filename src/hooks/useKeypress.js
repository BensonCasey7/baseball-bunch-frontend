import { useEffect } from "react";

const useKeypress = (key, action) => {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [action, key]);
};

export default useKeypress;
