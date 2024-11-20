import { useState } from "react";

export const useQuantity = (initialQuantities: number[]) => {
  const [quantities, setQuantities] = useState<number[]>(initialQuantities);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  return { quantities, handleQuantityChange };
};
