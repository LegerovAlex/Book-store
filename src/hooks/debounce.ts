import { useRef, useCallback } from "react";

const useDebounce = () => {
  const ref = useRef<NodeJS.Timeout | undefined>(undefined);

  return useCallback((cb: () => void, delay = 500) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(cb, delay);
  }, []);
};

export default useDebounce;
