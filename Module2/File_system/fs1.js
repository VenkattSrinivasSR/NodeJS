//object
const user={
    name: "jack",
    age: 20
}

//convert regular object to json object

const userData=JSON.stringify(user)
console.log(userData)

//convert json to reg obj

const userParse=JSON.parse(userData);
console.log(userParse);





