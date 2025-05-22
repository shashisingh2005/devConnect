const express = require("express");

const server = express();

server.use( "/test", (req, res) => {
    res.send("This is the test api url");
});

server.get("/user", (req, res) => {
    res.send({
        firstName: "Shashindra Kumar",
        lastname: "Singh"
    })
});

server.post("/user", (req, res) => {
    res.send("data saved successfuly");
});

server.delete("/user/:id", (req, res) => {
    res.send("User deleted");
});

server.use("/hello", (req, res) => {
    res.send("This is my hello command");
});

server.use("/", (req, res) => {
    res.send("This is the default methods to handle all incoming calls");
});

server.listen("3000", () => {
    console.log("Server is running on port 300");
});