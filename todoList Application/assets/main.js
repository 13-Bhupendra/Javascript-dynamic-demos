const input = document.getElementById("input");
const add_btn = document.getElementById("add_btn");
const task_list = document.getElementById("task-list") 

let todos = JSON.parse(localStorage.getItem("todos"))    || []    ;
let isEdit = false; 
let editIndex = 0;

 

function displayTask(){

    task_list.innerHTML = "";

    todos.forEach((todo , index) => {

        const p = document.createElement('p');
        p.textContent = todo;

        const delete_btn = document.createElement("button");
        delete_btn.textContent = "Remove";
        delete_btn.onclick = () => RemoveTask(index);

        const edit_btn = document.createElement("button");
        edit_btn.textContent = "Edit";
        edit_btn.onclick = () => editTask(index);



        const div  = document.createElement("div");
        div.appendChild(p);
        div.appendChild(edit_btn);
        div.appendChild(delete_btn);

        task_list.appendChild(div);
    });

}
 

function addTask(){
    console.log(todos);
    const value = input.value;
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos)); 
    input.value = " "
    displayTask();
}


function RemoveTask(index){
    todos.splice(index , 1);
    localStorage.setItem("todos", JSON.stringify(todos)); 
    displayTask();
}


function editTask(index){

    input.value = todos[index];
    isEdit  = true;
    editIndex = index;

}

add_btn.addEventListener('click' , function () {

    if(isEdit)
    {
        todos[editIndex] = input.value;
        isEdit = false;
    }
    else{
        addTask();
    }
    localStorage.setItem("todos", JSON.stringify(todos)); 
    input.value = " ";
    displayTask();
});

displayTask();