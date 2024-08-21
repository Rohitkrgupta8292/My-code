console.log('this is promise')

let prom = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log('Yes i am done')
            resolve("Harry")
        }, 3000);
    }
})

prom.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err);
})