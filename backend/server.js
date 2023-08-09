const express = require("express");
const app = express();
const port = 9000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the Express backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
