console.log("------------------------------------");
let option =[];
let i=0;
let operation=prompt("Choose the operation:").toLowerCase().trim();
while(operation!=="quit") {
    switch(operation){
        case 'add':
            let value=prompt("Enter the ToDo thing:").trim();
            option[i]=value;
            i++
            break;

    case 'list':
        console.log("Show the list");
        for(i=0;i<option.length;i++) {
        console.log(`#${i} : ${option[i]}`);
    }  
    console.log("------------------------------------");
        break;
        case 'delete':
    let remove = prompt("Enter the index of the deleting list item:");
    option.splice(remove,1);
    break;
default:
console.log("DEFAULT!!!");
console.log("------------------------------------");
break;
}
operation=prompt("Choose the operation:").toLocaleLowerCase().trim();
}



