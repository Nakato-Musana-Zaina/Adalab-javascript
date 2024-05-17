let friuts =['Mango','Banana','Orange'];
let arr = new Array(20,30)

console.log({friuts});
console.log({arr});

friuts[1]=2;
console.log({friuts});

console.log('last item', friuts.slice(-1))

let addLast = friuts.push('Apple');
console.log({friuts});

let addStart = friuts.unshift('Pineapple');
console.log({friuts});

let removeLast= friuts.pop();
console.log(friuts);

let removeFirst = friuts.shift();
console.log(friuts);

let newFriuts = friuts.push(['tomato','Pear']);
console.log({friuts});

let items = [20,30,40,50,60];

add = items.reduce((acc,cur)=> acc + cur);
console.log({add});

let multiply = items.map(item=>item*2);
console.log({multiply});

// let square = []
//  items.forEach((item) => item*item)
//  console.log(items)

 let square=[]
 items.forEach(item => { 
 const multiple = item*item;
 console.log(multiple);
 square.push(multiple);
})
console.log(square)

//Destructing
let [num1, num2,num3,num4, ...rest] =items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});