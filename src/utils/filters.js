const thousands = num => num.toLocaleString('en-US');

const capitalize = value =>
  value
    .toString()
    .charAt(0)
    .toUpperCase() + value.toString().slice(1);

export { thousands, capitalize };
