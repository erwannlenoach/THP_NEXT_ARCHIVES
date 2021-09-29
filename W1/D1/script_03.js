
// 1/ average revenue

const revenue = users.map(x => x.revenue);
const sum = (a, b) => a + b;

const totalRevenue = revenue.reduce(sum);

const averageRevenue = totalRevenue / revenue.length

const roundedaverageRevenue = Math.round(averageRevenue/100)
console.log(`le revenu moyen est de ${roundedaverageRevenue} euros`)

// 2/ Percentage of users earning money (revenue higher than 0)

const positiveIncome = revenue.filter( x => x > 0);
const positiveIncomePercentage = Math.round(positiveIncome.length / revenue.length * 100);
console.log(`${positiveIncomePercentage} % des users ont un revenue`)


// 3/ Average turnover
const averageTurnover = totalRevenue / positiveIncome.length
const roundedaverageTurnover = Math.round(averageTurnover/100)
console.log(`le revenu moyen parmis ceux qui ont un revenue est de ${roundedaverageTurnover} euros`)

// 4/ Total earning

const roundedRevenue = Math.round(totalRevenue/100)
console.log(`le revenu total est de ${roundedRevenue} euros`)

// 5/ Users in France

const frenchUserPercentage = Math.round(users.filter( x => x.country == "France").length / users.length * 100)
console.log(`${frenchUserPercentage} % of the users are French`)

// 6/ Turnover split into the 4 most represented countries

const mainMarketsUsers =  users.filter( x => x.country == 'France' || x.country == 'Great Britain' || x.country == "Germany" || x.country == 'United States' )

const mainMarketRevenue = mainMarketsUsers.map(x => x.revenue);
const mainSum = (a, b) => a + b;

const totalmainMarketRevenue = mainMarketRevenue.reduce(mainSum);

const averagemainMarketRevenue = totalmainMarketRevenue / mainMarketsUsers.length
const roundedMain = Math.round(averagemainMarketRevenue/100)

console.log(`le revenu moyen par user dans le big 4 est de ${roundedMain} euros`)

// 7/ Money-making countries

const moneyUsers = users.filter( x => x.revenue > 0);
const countriesofMoneyUsers = moneyUsers.map(x => x.country)
const moneyCountries = [... new Set (countriesofMoneyUsers)];

console.log(`Voici la liste des pays dans laquel vous faites des thunes : ${moneyCountries}`)

// 8/ 5 most money making Users


mostProfitableUsers = users.sort(function (a,b) {
  return b.revenue - a.revenue;
}).slice(0,5);


console.log(mostProfitableUsers)

// 9 / gender war

const maleEarners = moneyUsers.filter (x => x.sex == "M")

const femaleEarners = moneyUsers.filter (x => x.sex == "F")

if (femaleEarners > maleEarners) {
  console.log("Les femmes font gagner plus d'argent que les hommes");
} else {
  console.log("les hommes font gagner plus d'argent que les femmes");
}

// 10 / at least 75 bucks in the pocket

const users75 = moneyUsers.filter( x => x.revenue >= 7500)
console.log(users75)

// 11 / 100 first users - percentage of premium users75

const hundreds = users.filter( x => x.id <= 100)
const hundredsMoneyMakers = hundreds.filter(x => x.revenue > 0)
const hundredsMoneyMakersPercentage = hundredsMoneyMakers.length / hundreds.length * 100
console.log(`${hundredsMoneyMakersPercentage}% of the first 100rds users are premium members`)
