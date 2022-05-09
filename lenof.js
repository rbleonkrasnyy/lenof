// lenofd v1.0

function lenOf (data = undefined) {
    if (typeof data == 'boolean' || typeof data == 'function' || data == undefined) {
        throw Error(`The data doesn't have length, cause it's ${typeof data}`);
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

module.exports = lenOf;
