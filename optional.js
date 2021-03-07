// function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
//     console.log(arg1,arg2,arg3);
// }
// fun_one();
// fun_one('angular','nodejs','mongodb');
// fun_one(undefined,'deno',undefined);
// fun_one(null,null,null);
// function fun_one(arg1:string,arg2?:any):void{
//   console.log(arg1,arg2);  
// }
// fun_one("Hello_one");
// fun_one(null,null);
function fun_one(arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = "hello-3"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
fun_one("Hello_one");
fun_one(undefined, undefined, undefined, undefined);
fun_one(null, null, null, null);
