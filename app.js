// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');
//asignamos ffecha local segun usuario, español, dia number
// functions
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText; //obtenemos el valor del input de entrada y asignamos a una const
    if(!value) return; //si no hay valor, detener ejecucion
    const task = document.createElement('div'); //creamos un div y alamacenamos en una varibale
    task.classList.add('task', 'roundBorder'); //agregamos las clases mencionadas a la variable. Clase task para aplicar la logica de busqueda y RoundeBorder para agregar estilos
    task.addEventListener('click', changeTaskState);
    task.textContent = value; //asignando el value a la variable
    tasksContainer.prepend(task); //agregando elementos al container
    event.target.reset(); //resetea el form
};

const changeTaskState = event => {
  event.target.classList.toggle('done'); //Si no tiene dicha clase, se la agrega, si tiene se la quita.
};

//arrays de listas hechas , por hacer
const order = () => {
    const done = []; //array para tareas hechas
    const toDo = []; //array para tareas por hacer
    tasksContainer.childNodes.forEach( el => {
    //childNodes: accedemos a los hijos del elemento tasksContainer, foreach para iterar entre todos sus elementos. "el" elemento , puede usarse culquier nombre
        el.classList.contains('done') ? done.push(el) : toDo.push(el) //condicion, si "el" tiene la clase done, entonces pushea el elemento(envia al fina de su lista "done"), caso contrario lo envia a la lista "toDo"
    })
    return [...toDo, ...done]; //devuelve primero las tareas por hacer, luego las hechas
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}



setDate();
