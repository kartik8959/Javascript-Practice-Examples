let obj={
    num1:10,
    num2:20
};

function myFun(arg1,arg2,arg3)
{
    
    console.log(arg1+arg2+arg3+this.num1+this.num2);

};

myFun.call(obj,30,40,50);
myFun.apply(obj,[40,50,60,90,100,120]);


let newfun=myFun.bind(obj);
newfun(10,20
    ,30);