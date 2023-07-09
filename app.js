const express = require("express");
const app = express();
const penjualanRoutes = require("./routes/penjualanRoutes");

app.use(express.json());
app.use(penjualanRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Aplikasi mendengarkan pada port ${port}`);
});
