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

// way 1:

// function calculateGDP(object) {
//   const gdpOfTown = {};
//   const entries = Object.entries(object);
//   entries.forEach((entry) => {
//     let key = entry[0];
//     let value = entry[1];
//     let gdpOfTownCalculation = value.balance / value.population;
//     gdpOfTown[key] = gdpOfTownCalculation;
//   });
//   return gdpOfTown;
// }

// way 2:

// function calculateGDP(object) {
//   const gdpOfTown = {};
//   for (const key in object) {
//     const element = object[key];
//     const gdpOfTownCalculation = element.balance / element.population;
//     gdpOfTown[key] = gdpOfTownCalculation;
//     console.log(element);
//     console.log(gdpOfTownCalculation);
//     console.log(gdpOfTown);
//   }
//   return gdpOfTown;
// }

// way 3:

// function calculateGDP(object) {
   //   const gdpOfTown = {};
   //   Object.keys(object).forEach((key) => {
      //     let value = object[key];
      //     let gdpOfTownCalculation = value.balance / value.population;
      //     let town = key;
      //     gdpOfTown.town = gdpOfTownCalculation;
      //     console.log(key);
      //     console.log(town);
      //     console.log(value);
      //     console.log(gdpOfTown);
      //     console.log(gdpOfTownCalculation);
      //   });
      //   return gdpOfTown;
      // }
      
      console.log(calculateGDP(towns));