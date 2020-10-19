function wait(mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

setTimeout(() => {
  console.log("timers");
}, 0);
process.nextTick(() => {
  wait(20);
  console.log("poll");
});
