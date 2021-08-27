const Model = require("../models/sql.model");
const fileReader = require("../utils/csvFileReader");

class SqlController {
  
  welcome(req, reply) {
    return "sql routes working succesfully.";
  }

  async upload(req, reply) {
    try {
         
      if (req.file) {
        console.log("request successful", req.file);
        const path = req.file.path;
        const values = await fileReader(path);

      // console.log(values);
      // values.forEach(async (value) => {

      //await Model.insertData(value);

      //console.log(value);
          
      //});
       
   /*   let key = []
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

*/


        


        
        




        reply.status(200).send("Upload Succesfully");
        return;
      }
      reply.status(400).send("File does not match or exist.");
    } catch (err) {
      reply.status(500).send(err);
    }
  }
}

module.exports = new SqlController();
