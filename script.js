console.log("---------------------------------------------");

/*var todoArray = new Array();
var i = 0 ; 
function toDo() {
    var todoOperation = prompt("Choose an Operation ", "");
    while(todoOperation!="quit"){

        switch(todoOperation){ 
            case 'add':
                console.log("Added Pocket");
                break;
            case 'list':
                console.log("Listed Pocket");
                break;
            case "delete":
                console.log("Deleted Pocket");
                break;
            default:
                continue;
            }
        todoOperation="quit";
    }
    toDo();
}*/

var todoArray = new Array();
var i = 0;
var todoOperation = prompt("Choose the operation:").toLowerCase();
while (todoOperation !== "quit")
{
    switch (todoOperation) {

        case "add":
            var value = prompt("Enter points to To-Do :","add");
            todoArray[i] = value;
            i++;
            break;

        case "delete":
            var deletion = prompt("Enter the Index for deletion ","delete");
            todoArray.splice(deletion , 1);
            break;

        case "list":
            console.log("List of To - Do :");
            for (i = 0; i<todoArray.length; i++)
            {
                console.log(`#${i} : ${todoArray[i]}`);
            }
            console.log("---------------------------------------------");
            break;
            
        default:
            console.log("----------------- Invalid ----------------------");
            break;

    }
    todoOperation = prompt("Select the Operation ","Operation").toLowerCase();

}