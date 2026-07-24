function register()

{
    const pr=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("register here");
        }, 1000);

    

    })
    return pr;

}

function login(){
    const pr=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("login here");
    }, 4000);
})
    return pr;
}

function getData(){
    const pr=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("data fetched");
    }, 1000);
})
    return pr;

}
function displaydata(){
    return new Promise((resolve, reject)=>{
        resolve();
        console.log("displaying data");

    })
}
async function test() {
    await register();
    await login();
    await getData();
    await displaydata();
    console.log("all done");
    
}
test();