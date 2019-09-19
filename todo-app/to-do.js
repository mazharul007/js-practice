const toDoList =[{
    taskDetails:"Planing to go on a tour in next week at Shajek",
    isCompleted:false
},{
    taskDetails:"Plan to work on my personal project after this vacation",
    isCompleted:true
},{
    taskDetails:"need some update on linkedin prfoile. will update whenever get some free time",
    isCompleted:false
},{
    taskDetails:"go for some shopping",
    isCompleted:false
}]
const filters={
    searchedText:''
}
 
/**
const renderTodo= function(todo,filters){
    const filteredNote = todo.filter(function(task){
        return task.taskDetails.toLowerCase().includes(filters.searchedText.toLowerCase());
    })

    //document.querySelector('.new-el').innerHTML="";

    filteredNote.forEach(function(task){
        const newEl = document.createElement("p");
        newEl.textContent = task.taskDetails;
        document.querySelector('.new-el').appendChild(newEl);
    })

}
renderTodo(toDoList,filters); */

//rendering task based on serach 
const renderTodo = function(todos, filters){
    const filteredTask = todos.filter(function(todo){
        return todo.taskDetails.toLowerCase().includes(filters.searchedText.toLowerCase());
    })

    
    const inCompleteTodos = filteredTask.filter(function(todo){
        return todo.isCompleted === false;
    })

    document.querySelector('.new-el').innerHTML="";

    const summary = document.createElement('h3');
    summary.textContent=`you have ${inCompleteTodos.length} todo's left`;
    document.querySelector('.new-el').appendChild(summary);

    filteredTask.forEach((task)=>{
        const newElement = document.createElement('p');
        newElement.textContent = task.taskDetails;
        document.querySelector(".new-el").appendChild(newElement);
    })
}
renderTodo(toDoList,filters);

//creating button::
// const btn = document.querySelector('.button');
// btn.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log("Added New to do");
//     e.target.textContent="To do added";
// })

// input text
const task = document.querySelector('.task');
task.addEventListener('keyup',function(e){
    filters.searchedText = e.target.value;
    renderTodo(toDoList,filters);
})


//add todo button
document.querySelector('.add-form').addEventListener('submit',function(e){
    e.preventDefault();
    toDoList.push({
        taskDetails:e.target.elements.firstTask.value,
        isCompleted:false
    })
    renderTodo(toDoList,filters);
    e.target.elements.firstTask.value='';
})

