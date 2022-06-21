// const firstname: string = "Daniel";
// console.log(firstname);
// const greeting = (lastname: string): string => {
//   return "Hello" + lastname;
// };
// console.log(greeting("Toba"));
// interface UsersInterface {
//   firstname: string;
//   lastname: string;
//   age: number;
//   height: string;
//   isActive?: boolean;
//   getUserData?(): string;
// }
// const userData: UsersInterface = {
//   firstname: "Daniel",
//   lastname: "Oloruntoba",
//   age: 19,
//   height: "5'11",
//   isActive: true,
//   getUserData() {
//     return `Username is ${this.firstname} and the user age is ${
//       this.age
//     }. \nUser's height is ${this.height} and the user is ${
//       this.isActive ? "active" : "not active"
//     }`;
//   },
// };
// const user2: UsersInterface = {
//   firstname: "Karly",
//   lastname: "Divir",
//   age: 19,
//   height: "5'10",
// };
// console.log(user2.firstname + " " + user2.lastname);
// console.log(userData.getUserData());
// //Unions
// let favNumber: string | number = 12;
// console.log(favNumber);
// let errorMessage: string | null = null;
// if (userData.firstname !== "Daniel") {
//   errorMessage = "Unidentified user";
//   console.log(errorMessage);
// } else {
//   console.log("Welcome back " + userData.firstname);
// }
// //Types
// type Fruits = string;
// const fruits: Fruits[] = ["Mango", "Banana", "Orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
var greetButton = document.getElementById("greetMe");
var greetUser = document.getElementById("username");
var firstname = document.getElementById("firstname");
greetButton.addEventListener("click", function () {
    //   console.log(firstname.value);
    if (firstname.value === "") {
        greetUser.textContent = "Pls Type in a name first";
    }
    else {
        greetUser.textContent = "Welcome to TypeScript ".concat(firstname.value);
    }
});
// const addId = <T>(obj: T) => {
//   const id = Math.random().toString(16);
//   return {
//     ...obj,
//     id,
//   };
// };
// const user = {
//   name: "Daniel",
// };
// const result = addId(user);
// console.log(result);
// interface FriendInterface {
//   fullname: string;
//   age: number;
//   is_friend_closeby: boolean;
// }
// const user1: FriendInterface = {
//   fullname: "Karly Divirgilio",
//   age: 19,
//   is_friend_closeby: false,
// };
// console.log(user1.is_friend_closeby);
//Enums
//Values in enums are written with an "=" sign
var Status;
(function (Status) {
    Status["Started"] = "Started";
    Status["NotStarted"] = "NotStarted";
    Status["InProgress"] = "InProgress";
})(Status || (Status = {}));
var InProgress = Status.Started;
InProgress = Status.NotStarted;
console.log(Status.NotStarted);
var doneTasks = {
    id: "12u392h",
    status: Status.Started
};
console.log(doneTasks);
