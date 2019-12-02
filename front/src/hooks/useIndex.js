import { useEffect, useState } from "react";

export const useIndex = (startIndex, maxIndex, intervalTime) => {
  const [index, setIndex] = useState(startIndex);

  const handleIndex = () => setIndex(i => maxIndex == i ? 0 : i + 1);

  const jumpIndex = i => setIndex(i);

  useEffect(() => {
    const interval = intervalTime && setInterval(() => handleIndex(), intervalTime);
    return () => clearInterval(interval);
  }, []);
  
  return { index, jumpIndex };
};
