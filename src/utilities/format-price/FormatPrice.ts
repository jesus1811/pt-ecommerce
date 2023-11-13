export const formatPrice = (price: string) => {
  const priceNumber = parseFloat(price);
  if (priceNumber % 1 !== 0) return priceNumber.toFixed(2);
  return priceNumber.toFixed(0);
};
