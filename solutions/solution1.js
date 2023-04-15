const arrayReader = (array) => {
  if (!array) return 'por favor, passe um array para a função';
  if (!Array.isArray(array)) return 'por favor, passe um objeto do tipo array para a função';

  const justLetters = array.filter((element) => typeof element === 'string');
  const justNumbers = array.filter((element) => typeof element === 'number');
  const highestNumber = Math.max(...justNumbers);

  console.log(
    `Array só de letras: ${justLetters}
Array só de números: ${justNumbers}
Maior número do Array: ${highestNumber}`
  );

  return `Array só de letras: ${justLetters}
Array só de números: ${justNumbers}
Maior número do Array: ${highestNumber}`
};

arrayReader(['a', 10, 'b', 'hola', 122, 15]);