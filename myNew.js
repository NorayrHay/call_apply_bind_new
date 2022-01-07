'use strict'

function myNew(fn, ...args) {
    const _obj = {};
    _obj.__proto__ = fn.prototype;
    const returnedValue = fn.apply(_obj, args);

    if (typeof returnedValue !== 'object') {
        return _obj;
    }

    return returnedValue;
}

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
}

const person1 = myNew(Person, 'Name', 'Surname');

person1.getFullName();