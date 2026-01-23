// let arr=[5,-3,16,-11,-7,8]
// let res=[]

// while(arr.length>0){
//     let val = arr.shift();
//     if (val>0){
//         res.push(val);
//     }

// }           
// console.log(res);


// Q3.
function palindrome(){
let arr = [1,2,3,2,1]

let original =[];
for (let i=0;i<arr.length;i++){
    original.push(arr[i]);
    console.log(original);
}
while(arr.length >0){
reverse.push(arr.pop())
}
for(i=0;i<original.length;i++){
    if(original[i] !== reverse[i]){
        return "its a palindrome"
     }  
  }  
    return "not a palindrome";
}
console.log(palindrome());