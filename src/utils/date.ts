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

//return May 30, 2024, 11:45

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
