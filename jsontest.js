const result = require("./test.json")

let key = []
// const values = JSON.stringify(result)

Object.keys(result).map((values, i) => {
    key.push(values)
    
})

const k = []

 for (let i = 0; i < key.length; i++) {
    //console.log(result[key[i]].micr)
   
   
    k.push(result[key[i]].code, result[key[i]].type);
    

 

}
console.log(k)