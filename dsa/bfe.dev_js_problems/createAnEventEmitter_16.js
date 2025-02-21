/*
  There is Event Emitter in Node.js, Facebook once had its own implementation but now it is archived.
  
  You are asked to create an Event Emitter Class
  
  const emitter = new Emitter()
  It should support event subscribing
  
  const sub1  = emitter.subscribe('event1', callback1)
  const sub2 = emitter.subscribe('event2', callback2)
  // same callback could subscribe 
  // on same event multiple times
  const sub3 = emitter.subscribe('event1', callback1)
  emit(eventName, ...args) is used to trigger the callbacks, with args relayed
  
  emitter.emit('event1', 1, 2);
  // callback1 will be called twice
  Subscription returned by subscribe() has a release() method that could be used to unsubscribe
  
  sub1.release()
  sub3.release()
  // now even if we emit 'event1' again, 
  // callback1 is not called anymore
*/
// please complete the implementation
class EventEmitter {
 constructor() {
    this.map = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.map.has(eventName)) {
      this.map.set(eventName, []);
    }

    this.map.get(eventName).push(callback);

    return {
      release: () => {
        const callbacks = this.map.get(eventName) || [];
        const index = callbacks.indexOf(callback);
        
        if (index !== -1) {
          callbacks.splice(index, 1);
        }

        if (callbacks.length === 0) {
          this.map.delete(eventName);
        }
      }
    };
  }

  emit(eventName, ...args) {
    if (this.map.has(eventName)) {
      this.map.get(eventName).forEach(callback => callback(...args));
    }
  }
}





//------------------------------------
const emitter = new EventEmitter()

function callback1(){
  return console.log('1')
}

function callback2(){
  return console.log('2')
}

const sub1  = emitter.subscribe('event1', callback1);
const sub2 = emitter.subscribe('event2', callback2);
const sub3 = emitter.subscribe('event1', callback1);

emitter.emit('event1', 1, 2);

sub1.release();
sub3.release();
const sub4 = emitter.subscribe('event1', callback1);
