console.log("Hello, This is object.js file");
// Object Declaration
const person = {
  name: "John",
  age: 25,
  city: "Mumbai"
};

// Display Object
console.log("Original object:", person);

// Accessing Properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Adding Property
person.country = "India";
console.log("After adding country:", person);

// Updating Property
person.age = 26;
console.log("After updating age:", person);

// Deleting Property
delete person.city;
console.log("After deleting city:", person);

// Object.keys, Object.values, Object.entries
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Looping through Object Properties
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Object Destructuring
const { name, country } = person;
console.log("Destructured name:", name);
console.log("Destructured country:", country);

// Merging Objects
const address = { city: "Pune", pincode: 411001 };
const merged = { ...person, ...address };
console.log("Merged object:", merged);

// Object.freeze
Object.freeze(person);
person.name = "Jane"; // Will not change
console.log("After freeze attempt to change name:", person);

// Object.seal
const car = { brand: "Toyota", model: "Camry" };
Object.seal(car);
car.model = "Corolla"; // Can update
car.year = 2020; // Will not add
console.log("After seal attempt to add year:", car);
