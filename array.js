//collection of indexed and hetrogeneous elements called as arrays
//we will represent array with the help of square bracket
//index value is always start with 0
//we will access array by using indexes
//start with the 0
//========================================
//length->used to know the length of the array
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr[0],arr[1],arr[-1],arr[100]);
// console.log(arr.length);
// arr.length-5;
// console.log(arr[0],arr[4],arr[8]);
// console.log(arr.length);


//delete property used to delete perticular element
//delete not 
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr.length);
// delete arr[4];
// console.log(arr.length);
// console.log(arr);
//push()
//pop()
//unshift()
// let array=[10,20,30,40,50];
// console.log(array);
// array.push(60);
// console.log(array);
// array.unshift(10);
// console.log(array);
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.shift();
// console.log(array);
// splice()

// let arr=[10,20,30,40,50,60,70,80,90,100];

// arr.splice(4,2);
// console.log(arr);//[    10, 20, 30,  40,    70, 80, 90, 100
  
// arr.splice(4,1)
// console.log(arr);
// arr.splice(0,1);
// console.log(arr);
// arr.splice(4,1);
// console.log(arr);
// arr.splice(3,0,50,60,70);
// console.log(arr);
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr.length);
// console.log(arr[0],arr[3],arr[9],arr[10],arr[-1]);
// arr.length=5;
// console.log(arr.length);
// console.log(arr[0],arr[4],arr[5]);


// //delete property:-to delete particular element then we need to go for delete property
// //won't releases the memeory
// let arr=[10,20,30,40,50,60,70,80,90,100];
// delete arr[4];
// console.log(arr);
// delete arr[1];
// console.log(arr.length);


//push():
//pop():




// let array=[10,20,30,40];
// console.log(array);

// array.push(50);
// console.log(array);
// array.unshift(5);
// console.log(array);
// array.pop()
// console.log(array);
// array.shift(10);
// console.log(array);
// array.shift(10);
// console.log(array);


//splice
// let arr=[10,20,30,40,50,60,70,80,90,100];
// arr.splice(4,3);
// console.log(arr);
// arr.splice(4,1);
// console.log(arr);
// arr.splice(0,1);
// console.log(arr);
// arr.splice(4,1);
// console.log(arr);

// arr.splice(3,0,50,60,70,80);
// console.log(arr);
// arr.splice(8,0,100);
// console.log(arr);
// arr.splice(0,0,10);
// console.log(arr);
// arr.splice(10,0,101,102,103,104,105);
// console.log(arr);
// arr.splice(10000,0,101,102,103,104,105);
// console.log(arr);


//[10,20,30,40] each eleement multiply by 
//100
// console.log([10,20,30,40,50,60,70,80].map((Element,index)=>
// {
//     return element*100;
// })




// sort


// console.log(arr1.sort((num1,num2)=>{
//     return num1-num2;
// }))
// console.log(arr1.sort((num1,num2)=>{
//     return num2-num1;
// }))


// console.log(arr1.length)
// console.log(arr1[0],arr1[4]);
// arr1.length=3
// console.log(arr1.length)
// let arr1=[10,20,30,40,50,60,70,80,90,100];
// delete arr1[4]
// console.log(arr1[4]);


// let arr2=["hello_2","hello_3","hello_4"];
// console.log(arr2);
// arr2.push("hello_5");
// console.log(arr2);
// arr2.unshift("hello_1");
// console.log(arr2);
// arr2.pop()
// console.log(arr2);
// arr2.shift()
// console.log(arr2);

// splice()




// let arr1=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr1);
// arr1.splice(2,5);
// console.log(arr1);
// arr1.splice(4,1);
// console.log(arr1);
// arr1.splice(2,0,30,40,50,60,70)
// console.log(
//    arr1 
// );
// arr1.splice(9,0,100);
// console.log(
//     arr1 
//  );
// slice
// let arr=[10,100,1000,10000,100000,20,200,2000,20000,200000];
// // console.log(arr.slice(4,7));
// console.log(arr.slice(6,8));
// console.log(arr.slice(0,1));
// console.log(arr.splice(5));

// let arr=[10,20,30,40,50,









// // 60,70,8,90,100];
// // console.log(...arr.slice(5),...arr.slice(0,5));
// // console.log(arr.slice(5),arr.slice(0,5));

// let arr=[10,20,30,40,50,60,70,80,90,100];
// let arr1=arr.slice(0,3);
// let arr2=arr.slice(6);
// let arr3=arr.slice(3,6);

// // let arr1=arr.slice(0,3);
// console.log(arr1);
// console.log([...arr1,...arr2]);
// console.log([...arr3])

// console.log([10,20,30,40,50,60].map((element,index)=>{
// return element*10
// }))


// console.log([100,200,300,400,500,500].map((element,index)=>{
//     return `$${element}`
// }))





// filter

// console.log([10,20,30,40,50,60].filter((element,index)=>
// {
//     return element==20
// }))


// console.log([1,2,3,4,5].map((a,b)=>
// {
//     return a*100;
// }).filter((a,b)=>{
//     return a<=500

// }))


// console.log([1,2,3,4,5].reduce((firstvalue,nextvalue)=>{
//         return firstvalue-nextvalue
// }))


// console.log(["djangov3","to","wellcome"].reduceRight((firstvalue,nextvalue)=>
// {
//     return firstvalue+" "+nextvalue
// }
// ))
// console.log([100,200,300].reduceRight((firstvalue,nextvalue)=>
// {
//     return firstvalue+" "+nextvalue
// }
// ))

// console.log([10,20,30,40,50].includes(401));

// console.log(["angular11","node js","mongodb"].includes('mongoodb'))


// console.log([10,20,30,40,50].findIndex((element,index)=>
// {
//     return element===30
// }))

// console.log(['python','javascript','django','mongodb','nodekjs'].findIndex((element,index)=>
// {
//    return element==="mongodb"
// }))
// let arr2=[{'sub':"Angular"},
//          {'sub':"Nodejs"},
//          {'sub':'React js'},
//          {'sub':"Vue js",},
//          {'sub':"Mongodb"},
// // ];
// arr2.splice(arr2.findIndex((element,index)=>
// {
//    return element.sub=='Vue js'
// }),1)
// console.log(arr2)
// let arr=[10,20,30,40,50];



// console.log(arr.findIndex((element,index)=>
// {
//    return element==30;
// }))



// let arr=["angular11","Node js","angular11",'reatjs','nodejs'];
// arr.forEach((element ,index)=>{
//    console.log(arr.indexOf(element),index)
// })

// arr1=[100,200,300,100,200,300];
// arr1.forEach((element,index)=>
//    {
// console.log(arr1.indexOf(element))
//    })


// let arr=[10,20,30,40,20,10,40,30];
// console.log(arr.filter((element,index)=>
// {
//    return arr.indexOf(element)===index
// }))

// let arr=[10,20,30,40,20,10,40,30];
// console.log(arr.filter((element,index)=>
// {
//    return arr.indexOf(element)===index
// }))

// copywithin
// let arr=[10,20,30,40,50,60,70,80,90,100];
// arr.copyWithin(3);
// arr.copyWithin(9);
// arr.copyWithin(2);
// arr.copyWithin(2,5);
// arr.copyWithin(2,8);
// // arr.copyWithin(2,5,7);
// arr.copyWithin(3,6,9);

// console.log(arr);


// immutablity

// let arr1=[10,20,30]

// let arr2=[...arr1]
// arr1.push(40);
// arr2.push(50);
// console.log(arr1);
// console.log(arr2);

// let arr1=[10,20,30,40,50,60];
// let arr2=arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push(70);
// arr2.push(80);
// console.log(arr1);
// console.log(arr2);


// console.log(
//     ['angular11','react','nodejs'].find((element,index)=>
//     {
//         return element=='angr11'
//     }))



//     console.log([10,25,35,89,78,74,45].sort((arg1,arg2)=>
//     {
//         return arg1-arg2
//     })[[10,25,35,89,78,74,45].length-2]
//     )



    // console.log([10,25,35,89,78,74,45].sort((arg1,arg2)=>
    // {
    //     return arg2-arg1
    // }))







    // console.log([10,20,3,40,520,60,70,80].reverse())
    // console.log(["angular",'react','mongodb',"python"].reverse())





    // let n1=[10,20,30]
    // let n2=[40,50,60]

    // console.log([...n1,...n2])
    // console.log(n1.concat(n2))


    // console.log(Array.from("hello ji").reverse().join(""))

// console.log(["Angular11","javascript","json","react"].map((element,index)=>
// {
//     return Array.from(element).reverse().join("")

// }))

// console.log(Array.from("Angular").reverse().join(""));
console.log(['H',"E","L","O","O"].toString())
console.log(['H',"E","L","O","O"].join())
console.log(['H',"E","L","O","O"].join(""))
console.log(['H',"E","L","O","O"].toString().replace(",",""))
console.log(['H',"E","L","O","O"].toString().replace(/,/g,""))



