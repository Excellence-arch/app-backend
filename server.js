const app = require("express")();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const URI=process.env.URI
    mongoose.connect(URI, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("Connection to the database established");
        }
    })
const userRouter = require("./routes/user.route");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});