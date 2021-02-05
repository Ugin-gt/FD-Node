const sum = (...args) => args.reduce((i, t) => i + t, 0);
const div = (a, b) => a / b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;

exports.sum = sum;
exports.div = div;
exports.mult = mult;
exports.sub = sub;
