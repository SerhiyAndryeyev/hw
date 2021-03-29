// 1.remove reusable container //Done
// 2.remove outlines for all elements //Done
// 3.create todoState in this file ( todoState=[]) //Done
// 4.create array of todo - items with folowing structure: [
//    {
//       name: "",
//       id: timeStamp,
//       state: "completed/unCompleted",
//       time: "date now",
//    }
// ]
// and push it to todoState
// 5.wrap everything in this file into IIFE
// (function(window, document) {
//    // body
// })(window, document);
// 6.before adding new todo check if there is value. if string.length !==0. 
// ******************************************************
const onAddToDo = (function () {
  console.log(document.getElementById("todoTextField").value);
})();
const todoState = [];
