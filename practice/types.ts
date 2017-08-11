interface Stark{
    name?:string;
    label?:string;
}

function printName(stark:Stark){
    console.log(stark.name);
};

printName({name:"Parechay"});
printName({label:"Parechay"});