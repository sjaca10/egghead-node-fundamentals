var sayHello = function() { console.log('Hello to you!');  }
var sayGoodbye = function() { console.log('Goodbye then!'); }
var EventEmitter = require('events').EventEmitter
emitter = new EventEmitter();
emitter.on('hello', sayHello);
emitter.on('goodbye', sayGoodbye);
emitter.emit('hello', sayHello);
emitter.emit('goodbye');
global.emitter._events;
emitter.on('hello', sayHello);
emitter.on('hello', sayHello);
global.emitter._events;
emitter.removeListener('hello', sayHello);
global.emitter._events;
emitter.removeListener('hello', sayHello);
global.emitter._events;
emitter.removeListener('hello', sayHello);
global.emitter._events;
emitter.setMaxListeners(20);
emitter.setMaxListeners(0);
