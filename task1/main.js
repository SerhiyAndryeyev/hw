// нужно посчитать ВВП, на выходе должно быть
// {town1: 15, town2: 70}
// реализация должна быть рассширяемой,
// то есть может добавится town3, черновцы или что угодно.

const towns = {
  town1: {
    population: 12000,
    balance: 180000,
  },
  town2: {
    population: 600,
    balance: 42000,
  },
};

// function calculateGDP(object) {
//   for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//       const element = object[key];
//       console.log(element);
//     }
//   }
// }

function calculateGDP(object) {
  const gdpOfTown = {};
  Object.keys(object).forEach((key) => {
    let value = object[key];
    let gdpOfTownCalculation = value.balance / value.population;
    let town = key;
    gdpOfTown.town = gdpOfTownCalculation;
    console.log(key);
    console.log(town);
    console.log(value);
    console.log(gdpOfTown);
    console.log(gdpOfTownCalculation);
  });
  return gdpOfTown;
}
console.log(calculateGDP(towns));
