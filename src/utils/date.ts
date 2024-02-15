const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Example: getFullDate('2024-02-15T05:05:23-05:00') => 'February 15, 2024, 13:05'
 */
export const getFullDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${month} ${day}, ${year}, ${hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;

  return formattedDate;
};
