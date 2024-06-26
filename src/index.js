const express = require("express");
const connectDB = require("./db/dbconnection");
const router = require("./routes/v1");
const app = express();

const port = 9090;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use("/v1", router);

connectDB();
