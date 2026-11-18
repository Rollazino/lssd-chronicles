export const isNewStationAnnouncementPeriod = () => {
  const now = new Date();
  const start = new Date(2026, 10, 18);
  const end = new Date(2026, 10, 25);

  return now >= start && now < end;
};
