console.log("Hello, This is callback.js file");

const welcome = (name) => {
  alert("Welcome " + name);
};

const promptUser = (callback) => {
  let name = prompt("Please enter your name");
  callback(name);
};

promptUser(welcome);

// Callback with Array Methods
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log("forEach callback:", num);
});

// Asynchronous Callback Example
setTimeout(function() {
  console.log("Callback in setTimeout after 1 second");
}, 1000);

// Error-First Callback Pattern (Node.js style)
function getData(callback) {
  let error = null;
  let data = "Sample Data";
  callback(error, data);
}

getData(function(err, result) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Error-first callback result:", result);
  }
});
