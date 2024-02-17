function sum(a,b){
    c = a+b;
    return c;
}
// const result = sum(3,5);
console.log(sum(3,4));

const fact = function(n){
    let factorial = 1;
    for(let i=1; i<=n; i++){
        factorial = factorial*i;
    }
    return factorial;
}
console.log(fact(5));

const avg = (x,y,z)=>{

    return (x+y+z)/3;
}
console.log(avg(1,2,3))