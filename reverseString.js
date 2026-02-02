export default function capitalize(string) {
  const char = string.split("");
  char.reverse();

  const reversed = char.join("");
  return reversed;
}
