export default function caesarCipher(str, n) {
  return str
    .split("")
    .map((char) => {
      return shiftChar(char, n);
    })
    .join("");
}

function shiftChar(char, n) {
  const get = char.charCodeAt(0);
  let base;

  if (get > 64 && get < 91) {
    base = 65;
  }
  if (get > 96 && get < 123) {
    base = 97;
  }

  if (base === undefined) {
    return char;
  }

  const normalize = char.charCodeAt(0) - base;
  const shift = normalize + n;
  const wrap = shift % 26;
  const deNormalize = wrap + base;

  return String.fromCharCode(deNormalize);
}
