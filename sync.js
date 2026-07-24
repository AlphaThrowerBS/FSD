function register()

{
setTimeout(()=>{
    console.log("register here");
}, 1000);
}
function login( ){
setTimeout(()=>{
    console.log("login here");
}, 1000);
}
function getData(){
waitforinput(9000);
console.log("data fetched");
}
function logout(){

waitforinput(5000);
console.log("you are logged out");
}
function waitforinput(delay){
        const ct=Date.now();
const ms=ct+delay;
while(Date.now()<ms){
    // busy-wai
}

    console.log("waited for ",delay,"ms");


}

function displaydata(){
console.log("displaying data");
}
register(()=>{
login(()=>{
    getData(()=>{
        displaydata();
    });
});
});
register();
login();
getData();
logout();
waitforinput();