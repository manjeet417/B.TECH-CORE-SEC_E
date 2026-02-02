const heading = document.getElementById("myheading");
console.log(heading);
heading.style.color = "tomato"
heading.style.backgroundColor ="blue"
heading.textcontent = "hello students!"

const subheading = document.getElementsByClassName("sub-heading");
console.log(subheading);

for (let i=0;i<subheading.length;i++){
    subheading[i].style.color="cyan";
}
const content = document.querryselector("#content p")
console.log(content);

content.style.fontsize=["40px"]