// const para = document.getElementsByTagName("p");
// for(let i=0;i<para.length;i++){
//     if(i%2===0){
//         para[i].style.color="green"
//     }
//     else{
//          para[i].style.color="blue"
//     }
    
// }
// para[para.length-1].style.fontweight="bold"


// create a new element and append
constnewpara = document.createElement("p")
newpara.textcontent="this is dynamically created paragraph";
console.log(newpara)

document.getElementById("content").append
(newpara);
