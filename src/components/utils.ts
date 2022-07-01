export const getScreenDimension = (screenWidth: number) => {
  if (screenWidth <= 600) {
    return 'xs';
  } else if (screenWidth < 900 && screenWidth > 600) {
    return 'sm';
  } else if (screenWidth < 1200 && screenWidth > 900) {
    return 'md';
  } else if (screenWidth < 1535 && screenWidth > 1200) {
    return 'lg';
  } else {
    return 'xl';
  }
};

const getDateFromTimestamp = (timeStamp: any): string => {
  const date = timeStamp.toDate();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export default getDateFromTimestamp;
