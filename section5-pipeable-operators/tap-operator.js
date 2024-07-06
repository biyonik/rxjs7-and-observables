"use strict";
/**
 * tap is a pipeable operator that takes an observer as an argument and returns an observer
 * The tap operator is used to perform side effects on the observable sequence without modifying the sequence
 *
 * For example
 * - Logging
 * - Updating a variable
 * - Making an HTTP request
 * - Writing to a file
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
(0, rxjs_1.of)(1, 7, 3, 6, 2)
    .pipe((0, rxjs_1.map)(function (value) { return value * 2; }), (0, rxjs_1.tap)(function (value) { return console.log("Input Value: ".concat(value)); }), (0, rxjs_1.filter)(function (value) { return value > 5; }))
    .subscribe(function (value) { return console.log("Output Value: ".concat(value)); });
