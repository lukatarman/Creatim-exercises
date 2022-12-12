// 1. Napiši skripto, ki izpiše števila od 1 do 100. Namesto večkratnikov števila 3 izpiši "Trojka", namesto večkratnikov števila 5 izpiši "Petka".

// Pri tej nalogi nisem bil prepričan če želite v primeru večkratnika z obema številkama napisati tako "Trojka" kot "Petka". Zato sem pri tej nalogi
// napisal skripto ki poskrbi za oba primera.

const getHundredNums = () => {
  const numbers = [];

  for (let i = 1; i <= 100; i++) numbers.push(i);

  return numbers;
};

const fixedNums = getHundredNums().map((num) => {
  if (num % 5 === 0) return "Petka";
  if (num % 3 === 0) return "Trojka";

  return num;
});

const fixedNumsVariation = getHundredNums().map((num) => {
  if (num % 5 === 0 && num % 3 === 0) return "Trojka Petka";
  if (num % 5 === 0) return "Petka";
  if (num % 3 === 0) return "Trojka";

  return num;
});

console.log(fixedNums);
console.log(fixedNumsVariation);
