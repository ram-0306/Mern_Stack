// const arr = [2,2,3,4,5,6,6];
// const res = arr.filter((val)=>{
//     return val%2!==0;
// })
// console.log(res)

// const prices  = [740, 920, 1450, 3500, 6400, 7200, 120 ]
//  const res  = prices.filter((n)=>{
//     return n<5000 && n>1000
//  })
//  console.log(res);

 const phoneList = [
    { brand: 'Samsung', model: 'Galaxy s21', price: 56000, color: ['white', 'black', 'red'] },
    { brand: 'Mi', model: '10 Pro', price: 25000, color: ['silver', 'black'] },
    { brand: 'Vivo', model: 'v7', price: 23000, color: ['grey', 'blue', 'black'] },
    { brand: 'Oppo', model: 'neo 11', price: 35900, color: ['black', 'red'] },
    { brand: 'Samsung', model: 'Galaxy s21', price: 56000, color: ['white', 'black', 'red'] }
];

let list  = phoneList.filter((val)=>{
   return val.color.includes('red')
})
console.log(list);