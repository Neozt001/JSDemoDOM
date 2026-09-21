console.log("Skriv dit Javascript her")

// Task1
let a = document.getElementById("one");
console.log(a);

let myList = document.getElementsByTagName("li");
console.log(myList);

console.log("ClassName")
let myList2 = document.getElementsByClassName("list");
console.log(myList2);

// Task2
a.setAttribute("class", "cool");
// hide
document.getElementById("two").setAttribute("hidden", "true")
// change class of node 
let list = document.getElementsByClassName("hot");
console.log(list);
Array.from(list).forEach((item) => {
    item.setAttribute("class", "cool");
});
// Task3

// Find item in list
let name = document.getElementById("one").parentElement.nodeName;
console.log(name);
// First nad Last child change class attribute
let pId = document.getElementById("one").parentElement.id;
console.log(pId)
let pNode = document.getElementById(pId); 
console.log(pNode)
let firstC = pNode.firstElementChild;
firstC.setAttribute("class", "cool");
console.log(firstC)
let lastC = pNode.lastElementChild;
console.log(lastC)

// document.getElementsByTagName.FirstElementChild.setAttribute("class", "cool")
// document.getElementsByName("name").LastElementChild.setAttribute("class", "cool");

// EKSEMPEL
// let startnode = document.getElementById("firstul");
// console.log("Startnode")

// let newelement = document.createElement("li");
// newelement.setAttribute("class", "cool");
// newtextnode = document .createTextNode("apple");
// newelement.appendChild(newtextnode);
// startnode.appendChild(newelement);

// console.log(newelement);
console.log("slut på JavaScript")
