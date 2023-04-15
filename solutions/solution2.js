const calculatorFunctions = {
  addition: (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
      args = args[0];
    };
    return args.reduce((acc, curr) => acc + curr, 0);
  },
  subtraction: (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
      args = args[0];
    };
    return args.reduce((acc, curr) => acc - curr);
  },
  multiplication: (a, b) => {
    return a * b;
  },
  division: (a, b) => {
    if (b === 0) return 'não podemos dividir um número por 0';
    return a / b;
  }
};