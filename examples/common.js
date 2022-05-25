const lenOf = require('../src/lenof.js');

const len = lenOf({
    name: "Leonid Krasovsky",
    message: "I love Natalie",
    reason: "She's pretty",
});

console.log(len);
