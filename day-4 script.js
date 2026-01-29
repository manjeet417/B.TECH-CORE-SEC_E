let user={
    fullname:"manjeet",
    address:{
        city:"gurugram",
        state:"hariyana"
    },
    mobileno:"1234567890",
    favcolor:["black","red","white"],
    demo : function(){
        return "demo function";
    },
};
console.log(
    user.fullname,
    user.mobileno,
    user.favcolor[1],
    user.demo(),    
    user.address.city,
);



const car = {
    make: "mahindra",
    model: "thar"
};
// we can't add a new key and a new value pair but we can change or update existing values 
Object.seal(car);

// we can't add a new key and value pair also can't change or update existing value 
Object.freeze(car);

car.model = "xuv700"
car.color = "black"
console.log(car);
    