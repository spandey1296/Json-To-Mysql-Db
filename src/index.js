const createServer = require("./server");
const PORT = process.env.PORT || 3031;

const start = async () => {
  try {
    const app = await createServer();
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
