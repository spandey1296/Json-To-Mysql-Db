const fastifyPlugin = require("fastify-plugin");
const sqlController = require("../controller/sql.controller");
const upload = require("../middleware/multer");

const sqlRoutes = async (server, options) => {
  server.route({
    method: "GET",
    url: "/sql",
    handler: sqlController.welcome,
  });
  server.route({
    method: "POST",
    url: "/upload",
    preHandler: upload.single("file"),
    handler: sqlController.upload,
  });
};

module.exports = fastifyPlugin(sqlRoutes);
