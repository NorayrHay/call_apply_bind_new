'use strict'

Function.prototype.myCall = function (context) {
    context = context ? Object(context) : window;
    context.callerFn = this;

    const args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    const strFn = context.callerFn(...args );
    return strFn;
}

function test() {
    console.log('this = ', this);
    console.log('arguments = ', arguments);
}

test.myCall({
    name: 'Norayr',
    age: 27,
}, 'something', 'anything');
