let user = {
    name: "John",
    age: 30
  };
  
  /* đây gọi là function expression 
  user.sayHi = function() {
    console.log("cách function expression!");
  }; 
  */
 
//cách 2 function được tạo từ dòng code đầu tiên
  function sayHi(){
      console.log("cách 2 function declarition");
  }
  user.sayHi=sayHi;
  // xài [''] để select property k xài được cho function (cho tới bây giờ)
 console.log( user['age'])
 user;
  
  //
  
function makeUser(name,age){
    return{
        name ,
        age
    }
}
  let an=makeUser("leean",18);
  an
  
//Property existence test, “in” operator
console.log("newProperty" in an);

console.log('name' in user); 
console.log('name' in an); 
console.log("ham dinh nghia: "+makeUser);
  