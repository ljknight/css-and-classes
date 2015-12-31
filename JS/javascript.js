// EventEmitter
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(eventName, args, cb) {
  cb(args);
};

EventEmitter.prototype.once = function(eventName, args, cb) {
  cb(args);
};

EventEmitter.prototype.off = function(eventName, cb) {
  delete this.events[eventName];
};

EventEmitter.prototype.emit = function(eventName, args) {
  // TODO: callback?
  if (this.events[eventName] === undefined) {
    this.once(eventName, args);
    this.events[eventName] = args;
  } else {
    this.on(eventName, args);
  }

};

// FriendsEmitter
function FriendsEmitter(options) {
  EventEmitter.call(this, options);
  for (var option in options) {
    var type = typeof option;
    if (type === 'string' || type === 'array') {
     this[option] = options[option];
    }
  } 
  this.friends = [];
}

FriendsEmitter.prototype = Object.create(EventEmitter.prototype);
FriendsEmitter.prototype.constructor = FriendsEmitter;

// Function expects object as argument
var instance = FriendsEmitter({auth: new String('XF-254')});


