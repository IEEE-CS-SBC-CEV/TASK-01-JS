console.log("=================================")
let TaskList = [];
let i=0;
let popup=prompt("Choose the operation :").toLowerCase().trim();
while(popup!=="quit"){
    switch(popup){
        case 'add':
            let add = prompt("Add a new task:").trim();
            TaskList[i] = add;
            i++
            break;
        case 'list':
            console.log("Task List");
            for (i = 0; i < TaskList.length; i++) {
                console.log(`#${i}:${TaskList[i]}`);
            }
            console.log("=================================");
            break;
        case 'delete':
            let remove = prompt("Enter the index number of the task you want to delete:");
            TaskList.splice(remove, 1);
            break;
        default:
            console.log("Invalid entry!");
            console.log("=================================");
            break;
    }
    popup = prompt("Choose the operation:").toLocaleLowerCase().trim();
}