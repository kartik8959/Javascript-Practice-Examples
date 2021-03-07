//get element
//attach element 
///write the function


let sayWish=(message,color)=>
{
    let h1=document.querySelector('#msg1');
    h1.innerHTML=message;
    h1.style.backgroundColor=color;
    h1.style.padding="10px";
    h1.style.boxShadow="0 0 10px black";
    h1.style.borderRadius="8px 18px";

}


let gmbtn=document.querySelector('#gm-btn');
let gafbtn=document.querySelector('#gaf-btn');
let gebtn=document.querySelector('#ge-btn');
let gnbtn=document.querySelector('#gn-btn');

gmbtn.addEventListener('click',()=>
{
    sayWish("Good Morning","darkcyan");
})
gafbtn.addEventListener('dblclick',()=>
{
    sayWish("Good afternoon","blue");
});
gebtn.addEventListener('click',()=>
{
    sayWish("Good Evening","magenta");
});
gnbtn.addEventListener('click',()=>
{
    sayWish("Good Night","orangered");
});