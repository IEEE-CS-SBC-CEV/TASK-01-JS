console.log("#############################################");
let toDo = [];
let i = 0;
let choice = prompt("Choose the operation:").toLowerCase().trim();
while (choice !== "quit") {
    switch (choice) {
        case 'add':
            let item = prompt("Enter the Todo thing:").trim();
            toDo[i] = item;
            i++
            break;
        case 'list':
            console.log("list of work");
            for (i = 0; i < toDo.length; i++) {
                console.log(`#${i} : ${toDo[i]}`);
            }
            console.log("#############################################");
            break;
        case 'delete':
            let remove = prompt("Enter the index of the deleting list item:");
            toDo.splice(remove, 1);
            break;
        default:
            console.log("NOT A VALID ENTRY !!");
            console.log("#############################################");

            break;
    }
    choice = prompt("Choose the operation:").toLocaleLowerCase().trim();
}