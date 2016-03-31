export function getDateString(dateUTC) {
  const dateLocal = new Date(
    dateUTC.getUTCFullYear(), dateUTC.getUTCMonth(), dateUTC.getUTCDate());

  let dateLocalStr = dateLocal.toLocaleDateString();

  const now = new Date();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  if (today.getTime() == dateUTC.getTime()) {
    dateLocalStr += "today";
  }
  return dateLocalStr;
}
