interface Stark{
    name?:string;
    label?:string;
}

function printName(stark:Stark){
    console.log(stark.name);
};

//Hello
//Hi
printName({name:"Parechay"});
printName({label:"Parechay"});