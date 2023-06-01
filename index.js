const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', async (_, res) => {
  res.send({ test: 'all good!' });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
