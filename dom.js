// EXAMINE THE document OBJECT
// console.log(document);

// SOME EXAMPLES OF ACCESSING document OBJECT CONTENT
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister | Traversy Media";
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// SELECTORS
// .getElementById
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye"; 
// // innerText takes the styling of the element into consideration as well 
// // Eg: it wouldn't show if display: none;
// headerTitle.innerHTML = "<h3>Hello</h3>"; // puts specified html code inside the headerTitle i.e. <h3> inside the <h1>

// header.style.borderBottom = "6px solid black";
// console.log(headerTitle);

// getElementsByClassName
// var items = document.getElementsByClassName("list-group-item");
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "coral";

// for(let i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = "gray";
// }

// getElementsByTagName
// var li = document.getElementsByTagName("li");
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "coral";

// for(let i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = "gray";
// }

// QUERYSELECTOR
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "4px solid black";

// let input = document.querySelector("input"); // grabs the first input only
// input.value = "Hello World";

// let submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "coral";

// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.color = "gray";

// QUERYSELECTORALL
// let titles = document.querySelectorAll('.title');
// console.log(titles);

// let oddItems = document.querySelectorAll("li:nth-child(odd)");
// for(let i=0; i<oddItems.length; i++) {
//     oddItems[i].style.backgroundColor = "gray";
// }

// TRAVERSING THE DOM
// let itemList = document.querySelector("#items");

// parentNode
// itemList.parentNode.style.backgroundColor = "gray";
// console.log(itemList.parentNode);

// parentElement
// itemList.parentElement.style.backgroundColor = "gray";
// console.log(itemList.parentElement);

// childNodes & children
// childNodes will contain the whitespace between the elements as well
// console.log(itemList.childNodes); 
// children won't
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "gray";

// firstChild & firstElementChild
// includes whitespace
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello";

// lastChild & lastElementChild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = "coral";

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// CREATING ELEMENTS
// let newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello-1";
// newDiv.setAttribute("title", "Hello Div");

// let newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");
// console.log(newDiv);
// newDiv.style.fontSize = "35px";

// container.insertBefore(newDiv, h1);

// EVENT LISTENERS
var button = document.getElementById("button");
// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
//     let clickedDiv = document.createElement('div');
//     clickedDiv.style.color = "black";
//     let clickedText = document.createTextNode("Button clicked...");
//     clickedDiv.appendChild(clickedText);
//     button.insertAdjacentElement('afterend', clickedDiv);

//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// } 

// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// mouseover and mouseout applies to the elements inside the div as well
// box.addEventListener('mousemove', runEvent)

// let itemInput = document.querySelector("input[type='text']");
// let form = document.querySelector("form");
// let select = document.querySelector("select");

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);
// 'input' event will fire whenver you do ANYTHING with the input element

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     // for submit event of form
//     // e.preventDefault(); 
//     console.log(e.type);
//     // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`;
//     // output = document.getElementById('output');
//     // output.innerHTML = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`;

//     // box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

















