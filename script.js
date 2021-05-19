
console.log("############################################")
var toDo = new Array()
var i = 0;
var operation = prompt("Choose the Operation:").toLowerCase();

while (operation !== "quit") {

    switch (operation) {

        case "add":
            var toAdd = prompt("Enter the to-do thing", "add");
            toDo[i] = toAdd;
            i++;
            break;
        case "delete":
            var toDelete = prompt("Enter the index of item to be deleted", "delete");
            toDo.splice(toDelete, 1);
            break;
        case "list":
            console.log("List of Work");
            for (i = 0; i < toDo.length; i++) {
                console.log(`#${i} : ${toDo[i]}`);
            }
            console.log("############################################");
            break;
        default:
            console.log("############# Invalid Input ##############");
            break;

    }
    var operation = prompt("Choose the Operation", "operation").toLowerCase();
}
