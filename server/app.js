const app = require("./server");
require("dotenv").config();

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
  //   console.log(`Server is running on port 5000`)
});
