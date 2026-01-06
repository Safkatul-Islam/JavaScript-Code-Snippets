console.log("1. Script Start");

setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

new Promise((resolve, reject) => {
    resolve("3. Promise Resolved");
}).then((val) => console.log(val));

console.log("4. Script End");

/* 
Output Prediction in order:
1. Script start runs (Stack)
2. setTimeout send to the Web API. Web API sees 0ms and instantly puts it in the Queue(Standard one)
3. Script end runs (stack)
4. Is the Stack empty now? Yes, Event loop checks for VIP Queue(Promises)
5. Promise Resolved runs(VIP Queue is Empty now) since promises has high priority
6. Event loop now checks the startdard queue a put those into stack to run
7. Timeout runs (Moves from queue to stack)
*/