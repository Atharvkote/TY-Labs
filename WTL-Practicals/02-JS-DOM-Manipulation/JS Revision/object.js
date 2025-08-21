console.log("Hello, This is object.js file");

let person = {
  name: "Atharva",
  roll_number: 74,
  prn_number: "UCS23M1074",
  college: "Sanjivani College of Engineering",
  branch: "Computer Engineering",
};

console.log("Type of Person Object:", typeof person);
console.log("Person Object:", person);
person.age = 20;       // Modifying the object by adding a new property
console.log("Person Object after adding age:", person);

console.log("Print All Key and Values of Object : \n")
for(let k in person){
    console.log(k + ":", person[k]); // Iterating through the object properties
}

console.log("\nArray Of Object : \n")
let a = [
  { id: 10, name: "Atharva" },
  { id: 11, name: "Pranav" },
  { id: 13, name: "Sairaj" },
  { id: 14, name: "Yash" },
];

for(let i = 0; i < a.length; i++) {
    console.log("ID:", a[i].id, "Name:", a[i].name);
}