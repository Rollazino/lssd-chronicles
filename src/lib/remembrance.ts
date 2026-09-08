export const isSeptemberRemembrancePeriod = () => {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();

  return month === 8 && day >= 1 && day <= 15;
};