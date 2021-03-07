var pokemon={

    firstName:"pika",
    secondName:"chooo",
    getpokemon:function()
    {
        return(this.firstName+" "+this.secondName )
    }
}

var pokemonName=function(snack,hobby)
{
    console.log(`${this.getpokemon()} i choose you`);
    console.log(`${this.getpokemon()} likes `,snack,hobby);
}

let logpokemon=pokemonName.bind(pokemon)
logpokemon('nobita',"shijuka")
