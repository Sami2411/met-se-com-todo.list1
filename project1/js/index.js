let save=document.querySelector(".save");
let main=document.querySelector(".main");
let dnone=document.querySelector(".d-none")
let addtodo=document.querySelector("#add-todo")
let input1=document.querySelector("#input-1");
let input2=document.querySelector("#input-2")
save.addEventListener('click',()=>{
    main.classList.add("d-none");
    console.log('click');
})
addtodo.addEventListener('click',()=>{
    main.classList.remove("d-none");
})
 save.addEventListener('click',()=>{
    detail={
        input1:input1.value,
        input2:input2.value,
    }
    let userlist=localStorage.getItem("users");
    userlist=userlist===null ? [] :JSON.parse(userlist);
    let isUserExist=userlist.find((value) =>{
    return value.input1===detail.input1;
 });
})