const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1 - delete year of birth //

var names = JSON.parse(JSON.stringify(entrepreneurs));
var result = names.map(({ first, last}) => ({first, last}));

console.log(result);

// 2 - replace year of birth by age //

entrepreneurs.map(u => {u.age =2021 - u.year; delete u.year});
console.log(entrepreneurs);

// 3 - replace names of properties //

entrepreneurs.map(u => {
  u.firstName = u.first;
  u.lastName = u.last;
  delete u.first;
  delete u.last});

console.log(entrepreneurs);

// 4 - Born in the 70's //

  const seventies = entrepreneurs.filter(u => u.age >= 42 && u.age <= 51)
  console.log(seventies)
