    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      }
    ]



    const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
    }


    const logTodos = () => {
      console.log(arrayOfTodos);
      // console.log(arrayOfTodos[0].userId) // => 1
      // console.log(arrayOfTodos[1].userId) // => 1
      // console.log(arrayOfTodos[2].userId) // => 1
      // console.log(arrayOfTodos[3].userId) // => 1

    }

    const populateTodos = () => {
      for (let i = 0; i < arrayOfTodos.length; i++) {


        const olList = document.getElementById('todo-list')
        const li = document.createElement('li')
        const textNode = document.createTextNode(arrayOfTodos[i].title)
        olList.appendChild(li)
        li.appendChild(textNode)

      }
    }

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






    // // const words = ['ray', 'limitless', 'elite', 'exuberant', 'devotion', 'presence', 'great'];

    // // const result = words.filter(word => word.length > 6);

    // // console.log(result);
    // // Try it yourself, paste this into your browser's console, repl.it, or in a new repo and let it fly

    // const form = document.querySelector("form")
    // form.addEventListener("submit", e => {
    //     e.preventDefault();

    // ol.innerHTML = ""
    // })