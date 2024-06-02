import React, { useRef, useEffect } from "react";
import { View, Text } from "react-native";

const UseMounted = () => {
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export default UseMounted;
