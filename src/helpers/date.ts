import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export function formatDate(date: string) {
  dayjs.extend(relativeTime);
  return dayjs(date).format("DD.MM.YYYY");
}
