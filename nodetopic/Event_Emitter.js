// event and emit in nodejs
// const fs = require('fs');
// const rf = fs.createReadStream('./Sample.txt');
// rf.on('open', () => console.log('file is open'));





// we have an event module for doing event stuff;
// initiate and event module to use it  to handle make an object of it 
const event = require('events');
const eventEmitter = new event.EventEmitter();


// make own event 
// make event handle to an event
eventEmitter.on('tell', () => console.log('someone telling something '));

// fire the event 
eventEmitter.emit('tell');







