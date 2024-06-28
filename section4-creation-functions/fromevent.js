"use strict";
/**
 * fromEvent is a creation function that creates an observable from an event on a target.
 * For example, you can create an observable from a click event on a button.
 * Or Node.js developers can create an observable from a file read stream.
 * Or Jquery developers can create an observable from a Jquery event.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var triggerButton = document.createElement('button');
triggerButton.id = 'trigger';
document.body.appendChild(triggerButton);
var triggerClick$ = (0, rxjs_1.fromEvent)(triggerButton, 'click');
var observer = {
    next: function (value) { return console.log(value); },
    error: function (error) { return console.log(error); },
    complete: function () { return console.log('Completed'); }
};
triggerClick$.subscribe(observer);
