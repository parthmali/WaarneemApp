import { format } from "date-fns";

export const formatDate = (timestamp) => {
  return format(timestamp, "dd MMM y");
};
export const getPrice = (price) => {
  return new Intl.NumberFormat("en-EU", {
    maximumSignificantDigits: 3,
    style: "currency",
    currency: "EUR",
  }).format(price);
};
