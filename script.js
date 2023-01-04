'use strict';
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/2021',
//     showPublicData: function() {
//         console.log(`${this.name} ${this.surname} ${this.birthday}`);
//     }
// };

// Object.defineProperty(user, 'showPublicData',{enumerable: false});
// user.showPublicData();
// let key;
// for(key in user) {
//     console.log(key);
// }

// user.showPublicData();
// let key;
// for(key in user) {
//     // console.log(user[key]);
//     console.log(key);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function(){};


// for(key of arr) {
//     console.log(key);
// }

// const str = 'string';
// for(key in str) {
//     console.log(str[key]);
// }


const salaries = {
    john: 500,
    ann: 5000,
    ivan: 1000,
    sayHello: function() {
        console.log("Hello");
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
        }
    };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
// for(let res of salaries) {
//     console.log(res);
// }
