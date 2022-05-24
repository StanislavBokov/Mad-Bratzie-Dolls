export default (phrase: string | number, startSymbols: number = 5, endSymbols: number = 3): string => {
  const strPhrase = `${phrase}`;

  return strPhrase.length > startSymbols + endSymbols
    ? `${strPhrase.slice(0, startSymbols)}...${strPhrase.slice(strPhrase.length - endSymbols, strPhrase.length)}`
    : strPhrase;
};
