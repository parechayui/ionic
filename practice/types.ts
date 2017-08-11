interface Stark{
    name?:string;
    label?:string;
}

function printName(stark:Stark){
    console.log(stark.name);
};

//Hello
printName({name:"Parechay"});
printName({label:"Parechay"});