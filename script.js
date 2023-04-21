let inputArea = document.getElementById('input-area');
let inputBox = document.getElementById('input-box');
let addBtn = document.getElementById('add-btn');
let confirmBtn = document.getElementById('confirm-change');
let todoList = document.getElementById('todo-list');
let todoItem = document.getElementsByClassName('todo-item');
let todoText = document.getElementsByClassName('todo-text');
let options = document.getElementsByClassName('options');
let editBtn = document.getElementsByClassName('edit');
let deleteBtn = document.getElementsByClassName('delete');
let deleteList = document.getElementById('delete-list');
let deleteItem = document.getElementsByClassName('delete-item');

let currentEdit;

let createListItem = () => {

    //create new elements
    let newListItem = document.createElement('li');
    let newTodoText = document.createElement('span');
    let newOption = document.createElement('span');
    let newEditBtn = document.createElement('button');
    let newDeleteBtn = document.createElement('button');
    let newNode = document.createTextNode(inputBox.value);

    //append elements
    todoList.appendChild(newListItem);
    newListItem.appendChild(newTodoText);
    newListItem.appendChild(newOption);
    newTodoText.appendChild(newNode);
    newOption.appendChild(newEditBtn);
    newOption.appendChild(newDeleteBtn);

    //add inner content to option buttons
    newEditBtn.innerHTML = 'edit';
    newDeleteBtn.innerText = 'complete';

    //add classes to elements
    newListItem.classList.add('todo-item');
    newTodoText.classList.add('todo-text');
    newOption.classList.add('option');
    newEditBtn.classList.add('edit');
    newDeleteBtn.classList.add('delete');

    //clear input box
    inputBox.value = '';

    //add event listeners to new elements
    newEditBtn.addEventListener('click', function() {
        editListItem(event);
    }); 
    
    newDeleteBtn.addEventListener('click', function() {
        deleteListItem(event);
    });
}

//edit list item function 
let editListItem = (event) => {

    addBtn.style.display = 'none';
    confirmBtn.style.display = 'inline';

  //  console.log(event.target.parentElement.previousElementSibling.innerText);
    inputBox.value = event.target.parentElement.previousElementSibling.innerText;
    inputBox.focus();
    currentEdit = event.target.parentElement.previousElementSibling;
}

//delete list item function
let deleteListItem = (event) => {
    let deleteText = event.target.parentElement.previousElementSibling.innerText;
    event.target.parentElement.parentElement.remove();

    let newDeleteItem = document.createElement('li');
    let deleteNode = document.createTextNode(deleteText);

    deleteList.appendChild(newDeleteItem);
    newDeleteItem.appendChild(deleteNode);

    newDeleteItem.classList.add('deleted-item');

}

//add new list item
addBtn.addEventListener('click', createListItem);

//function for confirming changes to edited list item
confirmBtn.addEventListener('click', function() {
    currentEdit.innerText = inputBox.value;
    confirmBtn.style.display = 'none';
    addBtn.style.display = 'inline';
    inputBox.value = '';
});
       




