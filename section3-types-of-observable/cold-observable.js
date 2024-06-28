"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = require("rxjs/internal/ajax/ajax");
var ajax$ = (0, ajax_1.ajax)('https://random-data-api.com/api/users/random_user');
ajax$.subscribe(function (data) { return console.log('Sub 1: ', data.response.first_name); });
ajax$.subscribe(function (data) { return console.log('Sub 2: ', data.response.first_name); });
ajax$.subscribe(function (data) { return console.log('Sub 3: ', data.response.first_name); });
