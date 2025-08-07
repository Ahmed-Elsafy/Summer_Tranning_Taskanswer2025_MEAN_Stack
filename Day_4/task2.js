// Task 2: Timers

// 1. setTimeout
function greetUser() {
  setTimeout(() => {
    console.log("Hello, User!");
  }, 3000); // 3 seconds
}
greetUser();

// 2. setInterval countdown from 10 to 1
function countdown() {
  let count = 10;
  const intervalId = setInterval(() => {
    console.log(count);
    count--;

    if (count === 0) {
      console.log("Time's up!");
      clearInterval(intervalId);
    }
  }, 1000); // every 1 second

  // 3. Stop after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped early at count:", count + 1);
  }, 5000);
}
countdown();

// 4. Clear setTimeout before it runs
const timeoutId = setTimeout(() => {
  console.log("This will be cleared!");
}, 5000);

clearTimeout(timeoutId); // Cancels it immediately
