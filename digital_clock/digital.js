/* document.getElementById('digital').innerHTML=new Date().toLocaleTimeString(); */
/* setTimeout(()=>{

    console.log("I Love You")     executes after certain time interval
},10000) */    

setInterval(()=>{document.getElementById('digital').innerHTML=new Date().toLocaleTimeString()},1000) // executes for every certain time interval