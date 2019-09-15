// todo list
const toDoList =[{
    taskTitle:"Next Trip",
    taskDetails:"Planing to go on a tour in next week at Shajek",
    isCompleted:true
},{
    taskTitle:"Personal Project",
    taskDetails:"Plan to work on my personal project after this vacation",
    isCompleted:false
},{
    taskTitle:"update linkedin profile",
    taskDetails:"need some update on lindkein prfoile. will update whenever get some free time",
    isCompleted:false
}]
// // delete item from todolist::
const deleteItem = function(todo,completedTask){
    const index = todo.findIndex(function(todo){
         return todo.taskTitle.toLowerCase() === completedTask.toLowerCase();
    })
    if(index > -1){
        todo.splice(1,1);
    }
}
deleteItem(toDoList,"Personal Project");
console.log(toDoList);


// searching an item from toDoList using find method:
const searchItem = function(todo,title){
    return todo.find(function(todo){
        return todo.taskTitle.toLowerCase() === title.toLowerCase()
    })
}
let search = searchItem(toDoList,"Next Trip");
console.log(search);


// searching an item from toDoList using findIndex method:
const findTodo = function(todos, completedTask){
    const index = todos.findIndex(function(todo){
        return todo.taskTitle.toLowerCase() === completedTask.toLowerCase();
    })
    return todos[index];
}
let output = findTodo(toDoList, "update linkedin profile");
console.log(output);



// things that are incomplete:
const thingsToDo = function(todos){
    return todos.filter(function(todo){
        return todo.isCompleted === false;
    })
}
console.log(thingsToDo(toDoList));

//dynamic searching through filter method::
const findToDos = function(todos, search){
    return todos.filter(function(todo){
        const isTitleMatch = todo.taskTitle.toLowerCase().includes(search.toLowerCase());
        const isDetailsMatch = todo.taskDetails.toLowerCase().includes(search.toLowerCase());
        return isTitleMatch || isDetailsMatch;
    })
} 
console.log(findToDos(toDoList, "plan"));

// sorting toDoList 
const sortToDo = function(todo){
    todo.sort(function(a,b){
        if(!a.isCompleted && b.isCompleted){
            return -1;
        }else if(!b.isCompleted && a.isCompleted){
            return 1;
        }else{
            return 0;
        }
    })
}
sortToDo(toDoList);
console.log(toDoList);