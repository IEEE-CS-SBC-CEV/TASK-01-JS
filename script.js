
let datainput=document.getElementById('datain');
let label=document.getElementById('inlabel');
let inputValue;
let id=0,op="";
var todos=[];

document.getElementById('help').style.display="none";

document.getElementById('helpbtn').addEventListener('click',()=>toggle())

function toggle() {
    if(document.getElementById('help').style.display=="none")
    {
        document.getElementById('help').style.display="block";
    }
    else{
        document.getElementById('help').style.display="none";
    }
}

datainput.addEventListener('change',(e)=>{
    inputValue=e.target.value;
    if(op==""){
        check(inputValue);
    }
    else if(op=="add")
    {
        add(inputValue);
        label.textContent="Command"
    }
    else if(op=="delete"){
        deleteTodo(inputValue);
        label.textContent="Command";
    }
})

function check(inputValue) {

    if(inputValue==="add"){
        label.textContent="Input a Todo"
        datainput.value="";
        op="add";
    }
    else if(inputValue==="delete"){
        label.textContent="Input Todo Id"
        datainput.value="";
        op="delete";
    }
    else if(inputValue==="list"){
        datainput.value="";
       list();
    }
    else if(inputValue==="quit"){
        quit();
    }
    else {
        alert("Invalid Input")
    }
}

function add(inputValue) {
    let todo=inputValue;
    id++;
    todos.push({id,todo});
    datainput.value="";
    op="";
}


function deleteTodo(index) {
    todos= todos.filter(todo=>todo.id!=index);
    datainput.value="";
    op=""
}


function list() {
    document.getElementById('list').textContent="";
    document.getElementById('list').style.display="block";
    if(todos.length>0)
    {
        todos.forEach(todo => {
            let listItem=document.createElement('li');
            listItem.textContent=todo.id+"  "+todo.todo;
            document.getElementById('list').appendChild(listItem);
        });
    }
    else{
        alert("Empty List")
    }
    op="";
}
function quit() {
    document.body.textContent="";
    alert("App closed");
}