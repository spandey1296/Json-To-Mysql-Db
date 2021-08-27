const data = require("./test.json")




for(let row in data){
    var obj = data[row];
    console.log(obj.ifsc);
}