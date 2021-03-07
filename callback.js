// function fun_one(arg1)
// {
//     console.log(arg1())

// };
// fun_one(()=>
// {
//     return "Helo";

// });



// function fun_one(arg1,arg2,arg3)
// {
//     console.log(arg1(),"+++++",arg2(),"-------",arg3());


// }

// fun_one(
//     function front_end() {return "Angular11"},
//     function backend(){return "Backend"},
//     function database(){return "database"}
// )





// function dbfun(param1,param2)
// {
//     console.log(param1(),"*************",param2());

// }
// dbfun(()=>
// {
//     return "Succcess";
// },()=>
// {
//     return "Failed";
// })





// f

function fun_one(arg1,arg2,arg3)
{
    return arg1("hello")+"+++"+arg2("How are you"),arg3("Bye sir")
    
}
fun_one((param1)=>
{
    console.log(param1);

},(param1)=>
{
    console.log(param1)

},(param1)=>
{
    console.log(param1);

})

function add(num,callback)
{
    return callback(num+5,false)

}
function sub(num,callback)
{
    return callback(num-3,false);

}

function mul(num,callback)
{
    return callback(num*2,false)
    
}
function div(num,callback)
{
    return callback(num/2-2,false)

}
add(5,(addRes,error)=>
{
    if(!error)
    {
        sub(addRes,(subres,error)=>
        {
            if(!error)
            {
                mul(subres,(mulRes,error)=>
                {
                    if (!error)
                    {
                        div(mulRes,(divRes,error)=>
                        {
                            if(!error){
                                console.log(divRes);
                            }
                           
                        });
                    }
                });
                
            }

        });
    }
});














