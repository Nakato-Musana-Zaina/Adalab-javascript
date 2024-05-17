const cup = {
    color: "red",
    size:"small",
    texture: "smooth",
    shape: "round",
    functionality:{
        drinktype:"tea",
        temperature:"hot"
    },
    
     drink: function(){
        console.log("Use me to drink")
        console.log(`My main purpose is to drink ${this.functionality.drinktype} ${this.functionality.temperature}` )
    }
    //drink: ()=>{
        //console.log("Use me to drink")
        //console.log(`My main purpose is to drink ${cup.functionality.drinktype} ${cup.functionality.temperature}` )
    //}
}

console.log({color: cup.color});
console.log('size', cup.size);
console.log({temperature: cup.functionality.temperature})
console.log('texture', cup.texture)

cup.model = "glass";
console.log("cup",cup.model);

delete cup.model;
console.log({cup});

cup.color = "green";
console.log({cup});

cup.drink()

const keys = Object.keys(cup)
console.log({keys})

const values = Object.values(cup)
console.log({values})

const loops =Object.keys(cup).map(item=> {
    return({key:item,value:cup[item]})})

Object.keys(cup).forEach(item=>{
    console.log({key:item, value:cup[item]})
})

