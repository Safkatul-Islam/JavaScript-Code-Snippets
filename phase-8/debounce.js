function debounce(func, delay) {
  let timeoutId; // Closure variable to hold the timer

  return function(...args) {
    // 1. If a timer was already running, cancel it!
    if (timeoutId) clearTimeout(timeoutId);

    // 2. Start a new timer
    timeoutId = setTimeout(() => {
      func(...args); // 3. Run the actual function after the delay
    }, delay);
  };
}


function logWindowSize() {
    console.log("Width: 400px\n", "Height: 500px");
    console.log("Window Resized!");
}

const handleResize = debounce(logWindowSize, 2000);

handleResize();
handleResize();
handleResize();

setTimeout(() => {
    handleResize();
    console.log("Wait complete");
}, 100);