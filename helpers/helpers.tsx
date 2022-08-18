export const onlyNumbersAndDot = (value: string) => {
  return value
    .replace(/[^.\d]/g, '') //numbers only
    .replace(/^(\d*\.?)|(\d*)\.?/g, '$1$2') //one dot only
    .replace(/^\./, '') // cannot start with dot
    .replace(/^0\d/, '0.'); //cannot start with 0
};
