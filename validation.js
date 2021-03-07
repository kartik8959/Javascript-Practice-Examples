var nm=document.getElementById("unm");
var em=document.getElementById("em");
var pwd=document.getElementById("pwd");
var cpwd=document.getElementById("cpwd");
var uerr=document.getElementById("uerr");
var merr=document.getElementById("merr");
var perr=document.getElementById("perr");
var btn=document.querySelector("#btn");
btn.addEventListener("click",()=>
{
// console.log(nm.value);
if (nm.value.match(/\s/g))
{
    uerr.innerHTML="space character not allowed";
}
else
{
    console.log(nm.value);
}
if((em.value.match(/@gmail.com/g)) || (em.value.match(/@yahoo.com/g)) || (em.value.match(/@hotmail.com/g)))
{
    merr.innerHTML="free accounts not alloowed";
}
else{
    console.log(em.value);
}
if(pwd.value.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*[@*&^%$#]).{8,15}/g))
{
   console.log(pwd.value);
}
else{
    alert("password validate failed");
}

    if(pwd.value==cpwd.value)
    {
        console.log("matching");
    }
    else{
        perr.innerHTML="not matching"
    }



// alert(nm.value)
    });


