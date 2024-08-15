text = document.querySelector("input");
btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let pass=""
    Caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    small = "abcdefghijklmnopqurstuvwxyz";
    special = "!@#$%^&*(\_)";
    digit = "0123456789";
    allchars = Caps+small+special+digit;
    
    pass += Caps[Math.floor(Math.random() * Caps.length)];
    pass += small[Math.floor(Math.random() * small.length)];
    pass += special[Math.floor(Math.random() * special.length)];
    pass += digit[Math.floor(Math.random() * digit.length)];
   // console.log("Button was clicked")
    while(pass.length<8){
      pass+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    text.value = pass;
})