console.log("-------------------------------")
let item = [];
let i=0;
let choice = prompt("Choose the operation:").toLowerCase().trim();
while (choice !== "quit")
{
        switch (choice){
                case 'add' :
                        let add = prompt("Enter the  ToDo Thing:").trim();
                        item[i] = add;
                        i++
                        break;

              case 'list' :
                      console.log("View the list of Operation");
                      for (i=0;i<item.length;i++) {
                        console.log(`#${i} : ${item[i]}`);       
                      }
                console.log("-------------------------------")
                break;
              case 'delete' :
                      let remove = prompt("Enter the index of value to delete") ;
                      item.splice(remove,1);
                      break;
             default:
                     console.log("Error..");
                     console.log("-------------------------------")
                break;
        }
        choice = prompt("Choose the operation:").toLocaleLowerCase().trim();
}




