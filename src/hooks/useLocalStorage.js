import React, { useState } from 'react';

const useLocalStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setLocalValue = (val) => {
    setStoredValue(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  };

  return [storedValue, setLocalValue];
}