const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
app.use(express.json());

app.post( "/signup", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save()
        res.send("User saved successfuly");
    } catch (error) {
        res.status(400).send("User is not saved", error.message);
    }
});

connectDB()
.then( () => {
    console.log("Database connected successfuly.");
    app.listen("3000", () => {
        console.log("Server is running on port 3000");
    });
})
.catch( (error) => {
    console.log("DB connection error, contact with system admin", error.message);
});

