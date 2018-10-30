const addLineBreak = (acc, val) => acc + "\n" + val;
const addPadding = (acc, val) => acc + val;

export const breaker = (text, max) => {
  return text.split("").reduce((acc, val) => {
    const index = acc.lastIndexOf("\n");
    const lastBreak = index === -1 ? 0 : index;
    const currentLine = acc.slice(lastBreak);
    const timeToBreak = currentLine.length && currentLine.length > max;
    return timeToBreak ? addLineBreak(acc, val) : addPadding(acc, val);
  }, "");
};

export const flatten = arrays => [].concat(...arrays);
