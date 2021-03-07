
this.x=9;
// console.log(this);

const module1=
{
    x:81,
    getX:function()
    {
        return this.x;
    }

}
// console.log(module1.getX());

const retriveX=module1.getX;
console.log(retriveX())


const bs=retriveX.bind(module1);
console.log(bs())