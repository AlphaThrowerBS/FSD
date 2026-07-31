const student={
    name: "Yash",
    age: 21,
    branch: "AIML"
}
const newstu={
    ...student,
    sec:"a"
}
console.log("New Student=",newstu);