export const getCapitalizedText = (text: string): string => {
  let words: string[] = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
};
