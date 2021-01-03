import CONSTANTS from "./constants";

export const getInfoFromDateString = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return {
      date: date.getDate() > 9 ? date.getDate() : "0" + date.getDate(),
      month: CONSTANTS.MONTHS_NAME_LIST[date.getMonth()],
      day: CONSTANTS.DAYS_NAME_LIST[date.getDay()],
    };
  } catch (exception) {
    console.log(exception);
    return {};
  }
};
export const getLastElement = (array) =>
  Array.isArray(array) && array[array.length - 1];
export const getFirstElement = (array) => Array.isArray(array) && array[0];
