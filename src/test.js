const fs = require("fs");
const http = require("http");

console.log("Program started...");

let a = 200;

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setImmediate(() => {
  console.log("it will execute first");
});

fs.readFile("./test.txt", "utf-8", (data) => {
  console.log("File contnet: " + data);
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Inner next tick");
  });
  console.log("process next tick");
});

Promise.resolve().then(() => {
  process.nextTick(() => {
    console.log("Inside promise next tick");
  });
  console.log("Promise call");
});

Promise.resolve().then(() => {
  process.nextTick(() => {
    console.log("Inside promise next tick 2");
  });
  console.log("Promise call 2");
});

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

setImmediate(() => {
  console.log("it will execute 2");
});

console.log("Code is ended here...");
