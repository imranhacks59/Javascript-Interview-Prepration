const input1 = {a:1,b:2,c:3,d:10,e:12}
const input2 = {a:2,e:12,f:6,d:10}

// output  = {d:10,e:12}
// 1st approach---
let output=  {}

for(let key in input1){
    if(input2.hasOwnProperty(key) && input1[key]===input2[key])
    output[key] = input1[key]
}

console.log(output)

