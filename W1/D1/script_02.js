
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 1/ liste des titres //

const titles = books.map( book => book.title);
console.log(`Voici la liste des livres:  ${titles}`)

// 2/ borrowed at least once //

const borrowedOnce = (u) => u.rented > 0;
console.log(books.every(borrowedOnce));

// 3/ Most & least rented//

books.sort(function (a,b) {
  return a.rented - b.rented;
});

console.log(books[0])
console.log(books[books.length - 1])

// 4/ delete a book//

const books2 = books.filter(book => book.id !== 133712);

console.log(books2)
