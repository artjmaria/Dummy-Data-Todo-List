let arrayOfTodos = [];


const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => arrayOfTodos = data)
}

const logTodos = () => {
  console.log(arrayOfTodos);
}

// =============================================================================
// ALTERNATE WAY #1

// const populateTodos = () => {
//   for (let i = 0; i < arrayOfTodos.length; i++) {

//     const olList = document.getElementById('todo-list')
//     const li = document.createElement('li')
//     const textNode = document.createTextNode(arrayOfTodos[i].title)
//     olList.appendChild(li)
//     li.appendChild(textNode)

//   }
// }
// =================================================================================

// ALTERNATE WAY #2

// (ADDITIONAL PRACTICE CODE/ ALTERNATIVE WAY TO APPROACH PROBLEM)

// const populateTodos = () => {

//   const tdList = document.getElementById('todo-list')
//   let lis = ``
//   for (let i = 0; i < arrayOfTodos.length; i++) {
//     lis += `<li>Title of To-Do: ${arrayOfTodos[i].title}</li>`

//   }
//   console.log(lis)
//   tdList.innerHTML = lis
// }

// const populateTodos = () => {
//   const tdList = document.getElementById('todo-list')
//   const li = document.createElement('li')
//   const textNode = document.createTextNode(arrayOfTodos[0].title)
//   tdList.appendChild(li)
//   li.appendChild(textNode)

// }
// =========================================================================================

const populateTodos = () => {

  document.getElementById("todo-list").innerHTML = "";

  for (let i = 0; i < arrayOfTodos.length; i++) {


    const listMain = document.getElementById("todo-list");

    const newItem = document.createElement("li");

    const newData = document.createTextNode(arrayOfTodos[i].title);

    newItem.appendChild(newData);
    listMain.appendChild(newItem);

    if (arrayOfTodos[i].completed === false) {
      newItem.style.color = 'red';
    } else {
      newItem.style.textDecoration = "line-through";
    }
  }
}

const clearTodos = () => {
  document.getElementById("todo-list").innerHTML = "";
}

const filterTodos = () => {

  document.getElementById("todo-list").innerHTML = "";

  const idNumber = document.getElementById("dropdown").value;
  console.log(idNumber);

  const filteredArray = arrayOfTodos.filter(todo => todo.userId == idNumber);
  console.log(filteredArray);


  for (let i = 0; i < filteredArray.length; i++) {

    const listMain = document.getElementById("todo-list");

    const newItem = document.createElement("li");

    const newData = document.createTextNode(filteredArray[i].title);

    newItem.appendChild(newData);
    listMain.appendChild(newItem);

  }
}

const completeTodos = () => {

  document.getElementById("todo-list").innerHTML = "";

  const filteredArray = arrayOfTodos.filter(todo => todo.completed === true);
  console.log(filteredArray);

  for (let i = 0; i < filteredArray.length; i++) {

    const listMain = document.getElementById("todo-list");

    const newItem = document.createElement("li");
    newItem.style.textDecoration = "line-through";

    const newData = document.createTextNode(filteredArray[i].title);

    newItem.appendChild(newData);
    listMain.appendChild(newItem);
  }
}

const incompleteTodos = () => {

  document.getElementById("todo-list").innerHTML = "";

  const filteredArray = arrayOfTodos.filter(todo => todo.completed === false);
  console.log(filteredArray);

  for (let i = 0; i < filteredArray.length; i++) {

    const listMain = document.getElementById("todo-list");

    const newItem = document.createElement("li");
    newItem.style.color = 'red';

    const newData = document.createTextNode(filteredArray[i].title);

    newItem.appendChild(newData);
    listMain.appendChild(newItem);
  }
}