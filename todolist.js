const todoList = [{ 
    name: 'Tournament', 
    dueDate: '2023-07-22' 
  }, { 
    name: 'Sleep Over with Friends', 
    dueDate: '2023-06-22' 
  }]; 
   
  renderTodoList(); 
   
  function renderTodoList() { 
    let todoListHTML = ''; 
   
    for (let i = 0; i < todoList.length; i++) { 
      const todoObject = todoList[i]; 
      
      const { name, dueDate } = todoObject; 
      const html = ` 
        <div>${name}</div> 
        <div>${dueDate}</div> 
        <button onclick=" 
          todoList.splice(${i}, 1); 
          renderTodoList(); 
        " class="delete-todo-button">Delete</button>  
      `; 
      todoListHTML += html; 
    } 
   
    document.querySelector('.todolist') 
      .innerHTML = todoListHTML; 
  } 
   
  function addTodo() { 
    const inputElement = document.querySelector('.name-input'); 
    const name = inputElement.value; 
   
    const dateInputElement = document.querySelector('.duedate-input'); 
    const dueDate = dateInputElement.value; 
   
    todoList.push({ 
       
      name, 
      dueDate 
    }); 
   
    inputElement.value = ''; 
   
    renderTodoList(); 
}