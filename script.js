function mylist(){
console.log("---------------------------------")
let work = [];
let i=0;
let select=prompt("Choose the operation :").toLowerCase().trim();
while(select!=="Quit"){
    switch(select){
        case'add':
        let item=prompt("Enter the todo thing:").trim();
        work[i]=item;
        i++
        break;
        case'list':
        console.log("list of work");
        for(i=0;i<work.length;i++){
            console.log(`#${i}:${work[i]}`);
        }
        console.log("-----------------------------");
        break;
        case'delete':
        let remove = prompt("enter the index number of deleting list item:");
        work.splice(remove,1);
        break;
        default:
            console.log("Not a valid entry!!");
            console.log("-----------------------------");
            break;
    }
    select = prompt("Choose the operation:").toLocaleLowerCase().trim();
    }
}
