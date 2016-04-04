export function isToday(dateUTC) {
  const now = new Date();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  return today.getTime() === dateUTC.getTime();
}

export function getDateString(dateUTC) {
  const dateLocal = new Date(
    dateUTC.getUTCFullYear(), dateUTC.getUTCMonth(), dateUTC.getUTCDate());

  let dateLocalStr = dateLocal.toLocaleDateString();

  if (isToday(dateUTC)) {
    dateLocalStr += "today";
  }
  return dateLocalStr;
}
