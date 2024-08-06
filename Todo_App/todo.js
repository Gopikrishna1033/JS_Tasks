let list_container = document.querySelector(".list_container");
let text = document.getElementById("init");
let todo = ()=>{
    if(text.value === ""){
        alert("Please add your task ");
    }
    else{
        let newEle = document.createElement("ul");
        let span = document.createElement("span");
        span.textContent = text.value;

        let icon = document.createElement("box-icon");
        icon.setAttribute("type", "solid");
        icon.setAttribute("name", "trash-alt");
        
        
        newEle.appendChild(span);
        newEle.appendChild(icon);

        list_container.appendChild(newEle);
        text.value = "";
        newEle.querySelector("box-icon").addEventListener("click",remove=()=>{
            newEle.remove();
        });

    }
}