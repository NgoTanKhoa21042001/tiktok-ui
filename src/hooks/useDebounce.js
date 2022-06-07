import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // delay lại khoảng thời gian khi set cái debouncedValue
    const handle = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
