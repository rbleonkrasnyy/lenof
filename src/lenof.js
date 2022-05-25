/*
 * lenOf v1.1
 *
 * Copyright (c) 2022 Leonid Krasovsky
 */

function lenOf (data = undefined) {
    if (typeof data == 'boolean' || typeof data == 'function' || data == undefined) {
        throw Error(`The data has no length`);
        return;
    }

    if (data.prototype == undefined) {
        let a = '';

        for (i in data) {
            a += i + ',';
        }

        a = a.split(",").filter((r) => r);

        data = a;
    }

    if (typeof data == 'number') {
        data = String(data);
    }

    if (typeof data.length == 'number') {
        return data.length;
    }

    return;
}

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = lenOf;
}
