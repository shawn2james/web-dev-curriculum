const output = document.getElementById("output");
document.getElementById("getText").addEventListener('click', getText);
document.getElementById("getUsers").addEventListener('click', getUsers);
document.getElementById("getPosts").addEventListener('click', getPosts);
document.getElementById("addPost").addEventListener('submit', addPost);

function getText() {
    fetch("sample.txt")
    .then(res => res.text())
    .then(data => output.innerHTML = data)
    .catch(err => console.log(err))
}

function getUsers() {
    fetch("users.json") 
    .then(res => res.json())
    .then(data => {
        let outputData = "<h2 class='mb-4'>Users</h2>";
        data.forEach(user => {
            outputData += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">${user.id}</li>
                    <li class="list-group-item">${user.name}</li>
                    <li class="list-group-item">${user.email}</li>
                </ul>
            `;
        })
        output.innerHTML = outputData;
    })
}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts") 
    .then(res => res.json())
    .then(data => {
        let outputData = "<h2 class='mb-4'>Posts</h2>";
        data.forEach(post => {
            outputData += `
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        })
        output.innerHTML = outputData;
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",  
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then(res => res.json())
    .then(data => console.log(data))
}






