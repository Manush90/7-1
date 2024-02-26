// class User {
//   constructor(firstName, lastName, Age, location) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = Age;
//     this.location = location;
//   }
//   static ageCompare(user1, user2) {
//     if (user1.age > user2.age) {
//       return console.log(` ${user1.firstName} è più vecchio ${user2.firstName}`);
//     } else if (user1.age < user2.age) {
//       return console.log(` ${user1.firstName} è più giovane ${user2.firstName}`);
//     } else {
//       return console.log(` ${user1.firstName} è un coetaneo ${user2.firstName}`);
//     }
//   }
// }
// const user1 = new User("Francesco", "Totti", "47", "Roma");
// const user2 = new User("Daniele", "De Rossi", "40", "Roma");

// User.ageCompare(user1, user2);

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  ageCompare(diffUser) {
    if (this.age < diffUser.age) {
      return `${diffUser.firstName} è più vecchio di ${this.firstName}.`;
    } else if (this.age > diffUser.age) {
      return `${diffUser.firstName} è più giovane di ${this.firstName}.`;
    } else {
      return `${diffUser.firstName} è coetaneo di ${this.firstName}.`;
    }
  }
}

a = new User("Francesco", "Totti", 47, "Roma");
b = new User("Daniele", "De Rossi", 40, "Roma");
c = new User("Lorenzo", "Pellegrini", 26, "Roma");
d = new User("Bryan", "Cristante", 26, "Bergamo");

console.log(a.ageCompare(b));
console.log(b.ageCompare(c));
console.log(c.ageCompare(a));
console.log(c.ageCompare(d));

// --------------------------------esercizio2---------------------------------------------------

const formNode = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const div = document.getElementsByClassName("animali")[0];

function crea(variabile) {
  const p = document.createElement("p");
  div.appendChild(p);
  p.textContent = variabile;
}

class Animal {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const creature = [];

formNode.onsubmit = function (e) {
  e.preventDefault();

  const creatura = new Animal(fname.value, lname.value, species.value, breed.value);

  creature.push(creatura);
  fname.value = "";
  lname.value = "";
  species.value = "";
  breed.value = "";

  crea(
    " Nome: " +
      creatura.petName +
      " Proprietario: " +
      creatura.ownerName +
      " Specie: " +
      creatura.species +
      " Razza: " +
      creatura.breed
  );
  console.log(creature);
};
