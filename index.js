const person = ["Duc", 25, "Son la", "175", "80", 0941211291, 2]


const personObject = [
  { 
    hometown: true,
    age: ["", "", ""],
    name: {
      firstName: "pham",
      lastName: "Duc",
      // camelCase
    },
  }, 
  {}, 
  {}
]


for (let key in personObject) {
  console.log(key,":" ,personObject[key]);
}
for (let key in personObject) {
  console.log(key, ":", personObject[key]);
}
// Create
personObject.height = 175
// Update
personObject.age = 15
console.log(personObject);

// Delete
delete personObject.height

console.log(personObject);


