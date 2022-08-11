let count = 0

let counter = document.getElementById("counter")

console.log(counter);

function increment(){
  count = count+=1
  counter.innerText = count;
  console.log(count);

}

function save(){
  console.log(counter);
}

let welcome = document.getElementById("welcome")

let name = "Kiran Subramanian Pallayil"
let greeting = "Welcome back"
let myGreeting = name+greeting

welcome.innerText = myGreeting;
