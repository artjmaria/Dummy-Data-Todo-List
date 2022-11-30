    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
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
        }]

   
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }

    
    const logTodos = () => {
        // console.log(arrayOfTodos);
        console.log(arrayOfTodos[0].userId) // => 1
        console.log(arrayOfTodos[1].userId) // => 1
        console.log(arrayOfTodos[2].userId) // => 1
        console.log(arrayOfTodos[3].userId) // => 1

    }
    
    const populateTodos = () => {
      const popul = document.getElementById('todo-list')
      popul.innerHTML= `<li>Title of To-Do: ${arrayOfTodos[0].title}</li>`

     
    }


   


