function useFormat(word) {
  const name = word
    .split(" ")
    .map((item, index) => {
      return item.charAt(0).toUpperCase() + item.substring(1, item.length);
    })
    .join("");

  return name;
}

export { useFormat };
