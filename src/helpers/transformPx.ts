export const transformPx = (value: number) => {
  const valueRef = 1920; // screen ref
  const valueVw = (value / valueRef) * 100;
  return `${valueVw}vw`;
};
