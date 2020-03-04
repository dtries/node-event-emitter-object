const events = require('events'); /* const created that used node built-in events module */
var eventEmitter = new events.EventEmitter(); /* variable created that can construct new event emitters */

var anEventHandler = function () { /* function named anEventHandler which logs a message to the terminal when called */
    console.log('Oh my, is that a scream?');
}

eventEmitter.on('scream', anEventHandler); /* emitter listens for the event 'scream' to by emmitted, once it is emmitted the anEventHandler function is called */

eventEmitter.emit('scream'); /* fires/produces an event named 'scream', which will be picked up on the eventEmmitter.on method which in turn calls the anEventHandler function */