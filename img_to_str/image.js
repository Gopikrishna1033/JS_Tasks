var istr;
let img2str = ()=>{
    let imageFile = document.getElementById('img').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load",()=>{
        if(reader.result){
            istr=reader.result;
            console.log(reader.result)
            document.getElementById('string_data').innerHTML=reader.result;
        }
    })
}
let str2img=()=>{
    document.getElementsByTagName('img')[0].src=istr;
}