const internship = false;
const ourPromise = new Promise((resolve,reject)=>{
    if(internship){
        resolve(`i made it`)
    }
    else{
        reject(`i will try harder`)
    }
})
ourPromise.then((response)=>{
    console.log({response})
    console.log( `i will continue working harder`);
})
.catch((error)=>{
    console.log({error});
    console.log(`i will continue applying for jobs`);
})
.finally(()=>{
    console.log(`I will be a software Engineer`);
});

console.log({ourPromise});

async function myAkiraChixDream(){
    try{
        console.log(`This is my dream`);
    await ourPromise;
    }
    catch{
        console.log(`I will continue applying` )
    }
}