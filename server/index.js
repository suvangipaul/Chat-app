const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const dotenv = require("dotenv")

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.hegku15.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)




app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});