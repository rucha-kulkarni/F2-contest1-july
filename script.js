/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) => {     
    if(item.profession == "developer")
    {
      console.log(item);
    }
  });
}// map returns a new array also filter creates copy 

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {     
    if(item.profession == "developer")
    {
      console.log(item);
    }
  });
}//forEach exectues function on each array element

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  // Write your code here, just console.log
  let updatedArr = arr.filter(item=>item.profession!="admin");
  console.log(updatedArr);
  arr = updatedArr;
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [{id:5,name:"raj",age:"26",profession:"manager"},
                  {id:6,name:"ram",age:"23",profession:"developer"},
                  {id:7,name:"sham",age:"22",profession:"intern"}];

  let concatenateArray = arr.concat(newArray);
  arr.concatenateArray;
  console.log(concatenateArray)
}
