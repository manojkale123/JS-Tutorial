let addToDoButton = document.getElementById('addToDo');
let todocontainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling'); 
    todocontainer.appendChild(paragraph)
    //if input field empty
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration ="line-through";

    })
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph)

    })

})
