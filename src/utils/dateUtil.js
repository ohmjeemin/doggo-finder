import { isNil } from './commonUtil';
export const convertTwoDigitDate = num => {
  const numStr = num.toString();
  if (isNil(numStr)) return null;
  if (numStr.length === 2) return numStr;
  return `0${numStr}`;
};
