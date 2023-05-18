console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');

// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/#why-this-happens
// tasks
// microtask

// as the currently running script must finish before microtasks are handled
// microtasks always happen before the next task.

// Tasks
// Microtasks
// JS stack
// log

// Dispatching the 'click' event is a task.
// Mutation observer and promise callbacks are queued as microtasks.
// The setTimeout callback is queued as a task.
