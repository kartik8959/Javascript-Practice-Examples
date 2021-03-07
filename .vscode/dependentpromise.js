let buildproject=new Promise((resolve,reject)=>
{
    let isDone=true;
    if(isDone)
    {
        resolve("your project is good");
    }
    else{
        reject("first make your project");
    }

});
let attendTechnicalRound=new Promise((resolve,reject)=>
{
    let isDone=false;
    if(isDone)
    {
        resolve(" you are passed in technical round please ready for next round");
    }
    else{
        reject("you have to improve your technical skills");
    }

  

});
let   attendHrRound=new Promise((resolve,reject)=>
  {
    let isDone=true;
      if(isDone)
    {
        resolve("your communication skills good pass");
    }
    else{
        reject("sorry failed comminication skills not so good");
    }

  });


  buildproject.then((message)=>
  {
    let result=`${message}`;
      console.log(message);
      attendTechnicalRound.then((message)=>
      {
          result+=`${message}`;
          console.log(message);
          attendHrRound.then((message)=>
          {
              result+=`${message}`;
              console.log(message);

          }).catch((err)=>
          {
              console.err(err,"1");

          })
      }).catch((err)=>
      {
          console.log(err,"2");

      });
      

  }).catch((err)=>
  {
      console.log(err,"3");

  });
  