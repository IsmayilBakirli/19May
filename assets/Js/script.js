class Person{
    constructor(name,surname){
        this.Name=name;
        this.surname=surname;
    }
}
var People=[];

let form=document.querySelector(".myForm");
let inputName=document.querySelector("input.name");
let inputSurname=document.querySelector("input.surname");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    if (inputName.value=="" || inputSurname.value=="") {
        alert("Name or Surname can not be empty!!!");
    }
    else{
        let person=new Person(inputName.value.trim(),inputSurname.value.trim());
        People.push(person);
        console.log("person was successfully created");
    }
}
)