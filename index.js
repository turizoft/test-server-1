const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
