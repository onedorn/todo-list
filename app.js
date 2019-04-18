const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// Function that create a new todo line, html template

const generateTemplate = (todo) => {

    const html = `
         <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;

};

addForm.addEventListener('submit', event => {
    
    event.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);    
        addForm.reset();    
    }
});

// Deleting todo lines

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});