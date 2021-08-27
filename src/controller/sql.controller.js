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
