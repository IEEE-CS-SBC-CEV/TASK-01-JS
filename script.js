var nOthing = "#################################";
console.log(nOthing);

var myArray = [];
var i=0;
var opt = prompt("Choose the operatio:").toLowerCase().trim();

while(opt !== 'quit'){

  switch(opt){
      case 'add':
        var add = prompt("enter the list","add");
        myArray[i] = add;
        i++;
        break;
      
      case 'delete':
        var toDelete = prompt("enter the index for delet","delete");
        myArray.splice(toDelete , 1);
        break;
      
      case 'list':
        console.log("List of To - Do :");
        for (i = 0; i<myArray.length; i++)
        {
            console.log(`#${i} : ${myArray[i]}`);
        }
        console.log("---------------------------------------------");
        break;

        default:
          console.log("error-------------");
          break;

      }
      
      var opt = prompt("Choose the operatio:").toLowerCase().trim();

}

 /*function myFunction() {
    var txt;
    
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  }
  myFunction()*/
  
