export function getToday(){
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

export function isToday(dateUTC) {
  const today = getToday();
  return today.getTime() === dateUTC.getTime();
}

export function getDateString(dateUTC) {
  const dateLocal = new Date(
    dateUTC.getUTCFullYear(), dateUTC.getUTCMonth(), dateUTC.getUTCDate());

  const dateLocalStr = dateLocal.toLocaleDateString();

  if (isToday(dateUTC)) {
    return "Today";
  }
  return dateLocalStr;
}
