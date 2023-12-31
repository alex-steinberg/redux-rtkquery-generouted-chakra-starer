const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function formatDate(date: string): string {
  if (!date) {
    return ""
  }

  const [year, month, day] = date.split("-")
  if (
    !year ||
    !month ||
    !day ||
    year.length < 4 ||
    parseInt(month) < 1 ||
    parseInt(month) > 12
  ) {
    return ""
  }
  return `${MONTH_NAMES[Number(month) - 1]} ${day}, ${year}`
}
