let num = 10;
let big = 10n;
let str = 'str';
let bool = true;
let nul = null;
let undef = undefined;
let obj = {};
let sym = Symbol();
let fun = function(){};
alert(
    `num is ${typeof num}\n` +
    `big is ${typeof big}\n` +
    `str is ${typeof str}\n` +
    `bool is ${typeof bool}\n` +
    `nul is ${typeof nul}\n` +
    `under is ${typeof undef}\n` +
    `obj is ${typeof obj}\n` +
    `sym is ${typeof sym}\n` +
    `fun is ${typeof fun}`
  );