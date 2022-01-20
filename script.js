const add = document.getElementById("additem")
const remove = document.getElementById("removeitem")
const input = document.getElementById("inputBlank")
const contain = document.getElementById("container")

const LOCAL_STORAGE_PREFIX = "TODO_APP_V1"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}- todos`
let todos = loadTodos() // Load from local storage


/// Appending all
add.addEventListener('click', function (index) {
    let btn = document.createElement('button');
    let paragraph = document.createElement("th");
    btn.innerText="x";
    btn.style.background="";
    paragraph.innerText = input.value;
    if (input.value === "") return alert("Write text in the blank field")
    todos.push(paragraph.innerText)
    input.value = "";
    paragraph.appendChild(btn);
    contain.appendChild(paragraph)
    saveTodos()

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        deleteItem(index)
        contain.removeChild(paragraph)
  
    remove.addEventListener('click', function () {
        localStorage.removeItem(TODOS_STORAGE_KEY)
    })
})  
})

///Saving to local storage
function saveTodos() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

//Getting from local storage
function loadTodos() {
    const todos = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todos) || []
}

///for localstorage
todos.forEach((element, index) => {
    let paragraph = document.createElement("th");
    paragraph.innerText = element;
    let btn = document.createElement("button");
    btn.innerText = "x";
    btn.style.background="";
    paragraph.appendChild(btn);
    contain.appendChild(paragraph);

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        deleteItem(index) // calling delete function for localstorage
        contain.removeChild(paragraph)
    })
    
    remove.addEventListener('click', function () {
        localStorage.removeItem(TODOS_STORAGE_KEY)

    })

});

///delete function
function deleteItem(index) {
    let todos = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY))
    todos.splice(index, 1) 
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos)) 
    localStorage.removeItem(index)
} 