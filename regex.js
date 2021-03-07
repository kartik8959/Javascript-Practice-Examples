// const regex=/^a...s$/;
// console.log(regex.test('abaas'));


// const regularexp=new RegExp(/^a...s$/);
// console.log(regularexp.test('alias'));
// console.log(/hi/.test('hi john'));



// let re=/hi/i;

// let result=re.test("Hi john");
// console.log(result);





// let re =new RegExp("hi",'i');
// let result=re.test('HI john');
// console.log(result);




let message='Hi,are you there ? hi,   HI';
let re=/hi/gi;
let matches=[];
let match;







// do{
//     match=re.exec(message);
//     if(message)
//     {
//         matches.push(match);
//     }

//  }while(match!=null);

//  console.log(matches);



//  while(match!=null)
//  {
//     match=re.exec(message);
//     if(message)
//     {
//         matches.push(match);
//     }
//  }
//  console.log(matches);


//  let  str="Are you OK,I'm ok";

//  let result=str.match(/ok/gi);
//  console.log(result);


// let str="are you ok i am OK";
// let result=str.replace(/ok/gi,'fine');
// console.log(result);


// const paragraph="The quick brpown foc jumps on a dog.if dog barks was it really lazy";

// const regex=/[^\w\s]/;
// console.log(paragraph.search(regex));
// console.log(paragraph[paragraph.search(regex)]);




// const str="a1 b2 c3 d4 e5 g6 h7 i8";

// const sections=str.split(/\d/);

// console.log(sections);


// const str="table  footbal foosball";

// const regex=/foo/g;
// let result;

// while((result=regex.exec(str))!==null)
// {
//     console.log(`Found ${result[0]} at ${result.index}`)
// }




//  re=/(\d{4})-(\d{2})-(\d{2})/;
//  const result=re.exec('1996-10-04')
// console.log(result);




//  re=/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const result=re.exec('2018-14-20');
// console.log(result);


// var a="ab"

// console.log(a.match(/^([ab]{2,5})$/))

// var nm=8959258810;
// k=nm.toString().match('^([0-9]{10})$');
// console.log(k);

var email="a@kkklkll.com";
console.log(email.match("^([a-zA-Z0-9$])+@([a-zA-Z0-9-])+\.([a-zA-Z0-9]{2,5}$)"));


