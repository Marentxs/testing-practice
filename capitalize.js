export default function capitalize(string) {
  if (string.length === 0) {
    return "Needs a string to work";
  }
  return string[0].toUpperCase() + string.slice(1);
}
