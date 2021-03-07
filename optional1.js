// function fun_one(arg1?:string,arg2?:string,arg3?:string):void
// {
//     console.log(arg1,arg2,arg3);
// };
// fun_one();
// fun_one('angular11','react js','nodejs');
// fun_one(undefined,'Deno');
// fun_one(null,null,null);
// function fun_one(arg1:string,arg2?:any):void{
//     console.log(arg1,arg2);
// }
// fun_one("hello_one");
// fun_one(undefined,undefined);
// fun_one("helloo",'hieeee');
function fun_one(arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = "Hello_3"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
fun_one("hello_1");
fun_one(undefined, undefined, undefined, undefined, undefined, undefined);
fun_one(null, null, null);
