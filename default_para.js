// function fun_one(arg1="reactjs",arg2="angular11",arg3="mongodb")
// {
//     console.log(arg1,arg2,arg3);
// }
// fun_one()
// fun_one("nodejs")
// fun_one(undefined,undefined,undefined)
// fun_one(undefined,null,null)
function fun_one(arg1="katik",arg2,arg3,...arg)
{
    console.log(arg1,arg2,arg3,arg);//variable hoisting
}
fun_one()
fun_one('pooja','ramlal','mukesh')
fun_one(undefined,undefined,undefined)
fun_one(null,null,null,"ram","lakhan",'pooja')

