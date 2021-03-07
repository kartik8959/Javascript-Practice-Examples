function add(num)
{
    return new Promise((resolve,reject)=>
    {
        resolve(num+5)
    });
};


function sub(num)
{
    return new Promise((resolve,reject)=>
    {
        resolve(num-3)
    });
};

function mul(num)
{
    return new Promise((resolve,reject)=>
    {
        resolve(num*2);
    });

};


function div(num)
{
    return new Promise((resolve,reject)=>
    {
     resolve(num/2-2);
    })
};



async function consume()
{
    let addres =await add(5);
    let subtres=await sub(addres);
    let mulres =await mul(subtres);
    let dives  =await div(mulres);
    console.log(addres,subtres,mulres,dives);
}

consume();
