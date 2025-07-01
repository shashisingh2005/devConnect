console.log("Program started...");

let a = 200;

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setImmediate(() => {
  console.log("it will execute first");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Inner next tick");
  });
  console.log("process next tick");
});
