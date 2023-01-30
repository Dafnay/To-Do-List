let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(input.value.trim().length != 0){
        addTask();
    }
});

let addTask = ()=>{
    IdCounter++;

    //Recoger Texto
    let newValue = input.value;

    //Agregar tarea
    const newTask = `
        <div class="task-container" id="${IdCounter}">
            <label>
                <input type="checkbox"> 
                ${newValue}
            </label>
            <img src="/images/bote-de-basura.png" class="closeBtn">
        </div>
    `;
    list.innerHTML += newTask;
    input.value = '';
    updateStats();
}

// Es la función que permite seleccionar las tareas o borrar

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
    }
});

//Para que aparezcan los checkbox seleccionados como tarea realizada
let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `Tareas pendientes: ${element.length} Completadas: ${checkbox.length}`;

};
// Para poder borrar las tareas
let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};
