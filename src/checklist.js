import { destinations } from "./destinations.js";

export function createChecklist(
  destination,
  days
) {
  const data =
    destinations[destination] ||
    destinations.general;

  const items = [...data.items];

  if (Number(days) >= 7) {
    items.push(
      "لباس اضافی",
      "لوازم شخصی بیشتر",
      "داروی کافی برای مدت سفر"
    );
  }

  return {
    destination: data.name,
    days: Number(days),
    items
  };
}
