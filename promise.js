let claenCamera=new Promise((resolve,reject)=>
{
    let isDone=false;
    if(isDone)
    {
        resolve('cleaning is done');
        }
        else
        {
            reject("not cleaned");
        }
});
claenCamera.then((msg)=>
{
    console.log(msg);

}).catch((err)=>
{
    console.error(err);

})