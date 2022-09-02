import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storageValue) : value;
      setStorageValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };
  return [storageValue, setValue];
}

export default useLocalStorage;
