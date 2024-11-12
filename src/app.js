const express = require("express");

const server = express();

server.use( "/test", (req, res) => {
    res.send("This is the test api url");
});

server.use("/hello", (req, res) => {
    res.send("This is my hello command");
});

server.use("/", (req, res) => {
    res.send("This is the default methods to handle all incoming calls");
});

server.listen("3000", () => {
    console.log("Server is running on port 3000");
});