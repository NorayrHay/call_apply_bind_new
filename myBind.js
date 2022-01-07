'use strict'

const person = {
    name: 'Name',
}

function info(arg1, arg2) {
    console.log(`name: ${this.name}, arg1: ${arg1}, arg2: ${arg2}`)
}

function myBind(fn, context, ...rest) {
    return function(...args) {
        return fn.call(context, ...rest.concat(args))
    }
}

myBind(info, person, '1', 'second')();