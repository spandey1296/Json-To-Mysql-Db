const multer = require("fastify-multer");

const mimeFilter = (req, file, cb) => {
  console.log(file.mimetype, "Multer File data");

  if (file.mimetype === "application/json") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "resources/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});


module.exports = multer({ storage: storage, fileFilter: mimeFilter });
