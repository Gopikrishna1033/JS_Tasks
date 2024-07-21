let phone = ()=>{
    let number = document.getElementById("mobile").value;
    let patrn = /^[6789]{1}[0-9]{9}$/;
    if ( patrn.test(number)){
        document.getElementById("tst").innerHTML="Valid mobile number";
    }
    else{
        document.getElementById("tst").innerHTML="Check the mobie number Once";
    }
    return false
}