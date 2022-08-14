import React from "react";
import { useCallback } from "react";
import { useState } from "react";

export const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

//initialValue는 매개변수. 매개변수에 아무것도 없으면 기본값이 null.
