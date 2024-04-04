export function formatDate(date: Date): string {
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because getMonth() returns zero-based index
  const year = date.getFullYear().toString().slice(-2); // Taking the last two digits of the year
  return `${month}/${year}`;
}
