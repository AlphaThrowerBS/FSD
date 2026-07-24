/* function sum(...num){
    return num.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4,5)); */

function sum(...num){
    sum=0;
    for(i=0;i<num.length;i++){
        sum+=sum+1;
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));