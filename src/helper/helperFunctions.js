import CONSTANTS from "./constants";

const { STATUS_ORDER_DELIVERED, MONTHS_NAME_LIST, DAYS_NAME_LIST } = CONSTANTS;
export const getInfoFromDateString = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return {
      date: date.getDate() > 9 ? date.getDate() : "0" + date.getDate(),
      month: MONTHS_NAME_LIST[date.getMonth()],
      day: DAYS_NAME_LIST[date.getDay()],
    };
  } catch (exception) {
    console.log(exception);
    return {};
  }
};
export const getLastElement = (array) =>
  Array.isArray(array) && array[array.length - 1];
export const getFirstElement = (array) => Array.isArray(array) && array[0];

export const isDelivered = (status) =>
  status?.toLowerCase() === STATUS_ORDER_DELIVERED;
