function display(){
    let opt1="";
    let arr= new Array();
    while(opt1!="quit"){
        
        let opt=prompt("Choose the operatiion")
        opt1=opt.toLowerCase().trim()

        if(opt1=="add"){
            let a=prompt("Enter the todo thing")
            arr.push(a)
        }

        if(opt1=="list"){
            let i;
            for(i=0;i<arr.length;i++){
                console.log("#"+i+" :"+arr[i])
            }
        }

        if(opt1=="delete"){
            let z=prompt("enter the index of the deleting list item")
            arr.splice(z,1)
        }
    }
}
