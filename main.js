let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Search event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById("item");
     
    // create new li element
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem.value))

    // create delete button
    let deleteBtn  = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    console.log(text);
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(item => {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none";
        }
    })
}