const express = require('express');
const app = express();
const path = require('path');
const PORT = '3004';

app.use(express.static(path.join(__dirname, './frontEnd/dist')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
