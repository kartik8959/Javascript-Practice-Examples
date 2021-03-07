var sub="javascript";
var wish=`'wellcome to ${sub}'`;
console.log(wish);
var tbl_name="stuednt";
var sal=50000;
var sql_query=`select * from ${tbl_name} where esal>=${sal};`
console.log(sql_query);

var u_name="kartik";
var pwd="1234";

var login_query=`select * from ${tbl_name} where uname=${u_name} and upwd=${pwd};`;
console.log(login_query);

var $name;
console.log($name);

var _k;
console.log(_k);

var _123data;
console.log(_123data);



console.log(10=="10");
console.log(10==10);
console.log(10===10);
console.log('10'=='ten');
console.log(10==='ten');





var hexadec=0X123abf;
var decimalno=100;
var doubleno=123.256988;
var octno=0o123;
var binno=0b1010;
console.log(  decimalno);
console.log(doubleno);
console.log( hexadec);
console.log(octno);
console.log(binno);
var flag=true;
console.log(flag);



var arr1=[10,20,30,40,50,60];
arr1.forEach(function(element,index)
{
    console.log(index,element);
});
var front_end=['Angular js','React js','Vue js'];
var database=['Oracle','MYSQL','mondodb'];
front_end.forEach((element,index)=>{
    console.log(element+'   '+database[index]);
})

var obj={
    sub_one:"Angular js",
    sub_two:"Node Js",
    sub_three:"Vue js"
}
console.log(obj.sub_one,
    obj.sub_two,
    obj.sub_three),
    obj[sub];



for (var key in obj)
{
    console.log(obj[key]);
}

console.log(obj['sub_one'],obj['sub_three']);


