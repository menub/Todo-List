let todoButton = document.querySelector(".todo-button");
let todoInput=document.querySelector(".todo-input");
let todoList =document.querySelector(".todo-list");
let selectOption =document.querySelector(".select-option");

 todoButton.addEventListener("click",addTodo);
 todoList.addEventListener("click",delcheckList);
 selectOption.addEventListener("click",filterList);


 function addTodo(e){
    e.preventDefault();
    //Create Div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");
    //Create li
   const newTodo = document.createElement('li');
   newTodo.classList.add("todo-items");
   newTodo.innerText= todoInput.value;
   todoInput.value=" ";
   todoDiv.appendChild(newTodo);

   const checkButton = document.createElement('button');
   checkButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
   checkButton.classList.add("check-button");
   todoDiv.appendChild(checkButton);

   const removeButton = document.createElement('button');
   removeButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
   removeButton.classList.add("remove-button");
   todoDiv.appendChild(removeButton);

   todoList.appendChild(todoDiv);
    
 }

 function delcheckList(a) {
   const item= a.target;
   //delete todo
   if (item.classList[0]=== "remove-button") {
     const todo = item.parentElement;
     todo.classList.add("fall");
     todo.addEventListener("transitionend",function() {
       todo.remove();
      
     });
    
   }
  //Check button
  if(item.classList[0]==="check-button"){
   const todo= item.parentElement;
   todo.classList.toggle("checked");
  }
   
 }

 function filterList(e){
   const todos =todoList.childNodes;

   todos.forEach(function(todo) {
     switch(e.target.value){
       case "all":
        todo.style.display ="flex";
         break;
         case "completed":
           if(todo.classList.contains("checked")){
             todo.style.display="flex";
           }else{
             todo.style.display="none";
           }break;
           case 'uncompleted':
           if(!todo.classList.contains("checked")){
             todo.style.display="flex";
           }else{
             todo.style.display="none";
           }
           break;
     }
   });
 }


 function storingTodo(todo) {
   
  let todos;
  if(localStorage.getItem('todos')===null){
    todos=[];
  }else{
    todos=JSON.parse
  }
   
 }


 
 

